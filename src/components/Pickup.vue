<template>
  <div class="outer-wrapper">
    <div class="tab-list flex-box">
      <template v-for="(item, index) in tabList">
        <div :class="[type==index+1?'tab-item--checked':'tab-item']" @click="changeTab(index+1)">
          {{item}}
          <div class="checked-block" v-if="type==index+1"></div>
        </div>
      </template>
    </div>
    <div class="search-wrap">
      <van-field type="number" id="searchInput" placeholder="输入快递单号" placeholder-class="pl-style"
             @input="searchInput" v-model="userInput"/>
      <img class="search-icon" src="../resource/images/common/search-icon.png" @click="search"/>
    </div>
    <div class="pickup-list">
      <template v-if="pickupList.length != 0">
        <template v-for="(item, index) in pickupList">
          <!--"/pages/pickupDetail/pickupDetail?id={{item.order_id}}"-->
          <router-link :to="{}" class="pickup-item" :style="{marginBottom: type==1?'.15rem':'0'}">
            <div class="pickup-info flex-box">
              <img class="express-icon" :src="item.company_icon"/>
              <div>
                <span decode="true" class="express-info">{{item.company_name}} &nbsp;&nbsp;&nbsp;&nbsp;{{item.tracking_number}}</span>
                <div class="deposit-time">{{item.time}}</div>
              </div>
            </div>
            <div class="pickup-btn" v-if="type==1" @click.stop="openGrid(item.order_id)">扫描开箱</div>
          </router-link>
        </template>
        <div class="pickup-fail-tip" @click="showFailBox" v-if="type==1">箱门未打开？</div>
      </template>
      <template v-else>
        <div class="empty-tips">
          <img src="../resource/images/common/empty.png"/>
          暂时没有您的存件信息
        </div>
      </template>
    </div>
    <div :class="[showFailTip?'pickup-fail-box--show flex-box':'pickup-fail-box flex-box']">
      <van-icon name="close" class="close-btn" @click="showFailBox"></van-icon>
      <div class="pickup-fail__text">请检查是否箱门未关闭或者联系客服</div>
      <div class="consumer-hotline">客服电话 18259617616</div>
      <div class="btn-wrap btn-min">
        <div class="btn" @click="call">一键拨号</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        tabList: ['待取快件','取件记录'],
        type: 1,
        pickupList: [],
        curPage: 1,
        lastPage: false,
        showFailTip: false,
        userInput: '',
        firstOpen: true
      }
    },
    methods: {
      changeTab: function(index) {
        this.type = index;
        this.pickupList = [];
        this.curPage = 1;
      },
      showFailBox: function() {this.setData({showFailTip: !this.data.showFailTip})},
      call: function() {
        wx.makePhoneCall({
          phoneNumber: '18259617616'
        })
      },
      searchInput: function(value) {
        this.userInput = value;
      },
      search: function() {
        this.curPage = 1;
        this.pickupList = [];

        util.showLoading().then(() => {
          api.PickupList({
            orderState: this.data.type,
            page: this.data.curPage,
            trackingNumber: this.data.userInput,
            formId: ''
          }).then(res => {
            this.initData(res)
          })
        })
      },
      initData: function(res) {
        // console.log(res);
        let list = res.data.data.list, interim_list = this.pickupList;
        for(let i in list) {
          interim_list.push(list[i])
        }
        this.setData({
          pickupList: interim_list,
          curPage: res.data.data.pageNumber,
          lastPage: res.data.data.lastPage
        });
        console.log(this.data.pickupList);
        wx.hideLoading();
      },
      //  开箱
      openGrid: function(e) {
        let that = this;
        wx.scanCode({
          success: res => {
            let result = res.result;
            console.log('扫描结果：',result);
            util.showLoading('开箱中...').then(() => {
              console.log('网点码参数',util.GetQRCodeParams(result, 'code').code);
              api.OpenGrid({orderId: e.currentTarget.dataset.id, deviceCode: util.GetQRCodeParams(result, 'code').code}).then(res => {
                console.log(res);
                wx.hideLoading();
                if(res.data.code == 0) {
                  util.showToast('开箱成功！');
                  this.setData({curPage: 1, pickupList: []});
                  api.PickupList({
                    orderState: that.data.type,
                    page: that.data.curPage,
                    trackingNumber: that.data.userInput,
                    formId: ''
                  }).then(res => {
                    that.initData(res);
                  })
                } else {
                  wx.showModal({
                    title: '提示',
                    content: res.data.msg,
                    showCancel: false,
                    confirmText: '知道了'
                  })
                }
              })
            })
          }
        })
      },



    },
    computed: {},
    mounted: function () {

    },
    created: function () {

    },
  }
</script>

<style scoped lang="less">
  body,html{
    background: #F4F3F1;
  }
  .tab-list{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #FFF;
    z-index: 100;
  }
  .tab-item,.tab-item--checked{
    width: 50%;
    text-align: center;
    font-size: 30/200rem;
    color: #B0B0B0;
    position: relative;
    line-height: 100/200rem;
    letter-spacing: 1.5/200rem;
    overflow: hidden;
  }
  .tab-item--checked{
    color: #3699FF;
    font-weight: bold;
  }
  .checked-block{
    width: 34%;
    height: 8/200rem;
    border-radius: 8/200rem;
    background: #6FA9F8;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }



  .search-wrap{
    width: 100%;
    background: #F5F4F2;
    padding: 25/200rem;
    position: relative;
    margin-top: 100/200rem;
  }

  #searchInput{
    width: 100%;
    height: 90/200rem;
    padding: 0 100/200rem 0 60/200rem;
    background: #FFF;
    font-size: 30/200rem;
    border-radius: 90/200rem;
  }
  .pl-style{
    font-size: 30/200rem;
    color: #999999;
  }
  .search-icon{
    width: 90/200rem;
    height: 90/200rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 35/200rem;
    margin: auto 0;
  }

  .pickup-list{
    width: 100%;
  }
  .pickup-item{
    width: 100%;
    background: #FFF;
    margin-bottom: 30/200rem;
  }
  .pickup-info{
    padding: 40/200rem 25/200rem;
    border-bottom: 1px solid #F3F2F2;
    justify-content: flex-start;
  }

  .express-icon{
    width: 90/200rem;
    height: 90/200rem;
    border-radius: 50%;
    border: 1px solid #5C9FF5;
    margin-right: 30/200rem;
  }
  .express-info{
    font-size: 32/200rem;
    font-weight: bold;
    margin-bottom: 20/200rem;
    display: block;
  }
  .deposit-time{
    font-size: 26/200rem;
    color: #ABABAB;
  }
  .disabled-tip{
    font-size: 26/200rem;
    color: #FE8B5E;
    justify-content: flex-start;
  }
  .clock-icon{
    width: 28/200rem;
    height: 27/200rem;
    margin-right: 10/200rem;
  }
  .pickup-btn{
    width: 100%;
    text-align: center;
    line-height: 100/200rem;
    color: #3699FF;
    font-size: 30/200rem;
    font-weight: bold;
  }

  .pickup-fail-tip{
    text-align: center;
    color: #60ACFC;
    font-size: 28/200rem;
    margin: 150/200rem 0 80/200rem 0;
  }


  .pickup-fail-box,.pickup-fail-box--show{
    width: 100%;
    height: 500/200rem;
    background: #FFF;
    padding: 80/200rem;
    flex-direction: column;
    justify-content: space-around;
    border-top: 1px solid #F3F3F3;
    transition: all .3s;
    position: fixed;
    left: 0;
    bottom: -500/200rem;
  }
  .pickup-fail-box--show{
    bottom: 0;
  }
  .pickup-fail__text{
    font-size: 28/200rem;
    color: #439EFF;
  }
  .consumer-hotline{
    font-size: 28/200rem;
    color: #999999;
  }
  .btn{
    letter-spacing: 0;
    text-indent: 0;
  }
  .close-btn{
    position: absolute;
    top: 25/200rem;
    right: 25/200rem;
  }

</style>
