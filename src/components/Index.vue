<template>
  <div class="outer-wrapper">
    <div class="userinfo-wrap" @click="toChangePhone">
      <img class="userinfo-bg" src="../resource/images/index/GRBG1.png"/>
      <div class="userinfo-content flex-box">
        <div class="flex-box">
          <div class="user-avatar"></div>
          <div class="user-phone">{{userInfo.cell_phone || '点击注册'}}</div>
        </div>
        <img class="right-arrow-white" src="../resource/images/index/right-arrow-white.png"/>
      </div>
    </div>
    <div class="index-content-wrap">
      <!--carousel-->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img class="swipe-img" src="../resource/images/index/carousel-demo.png" alt="">
        </van-swipe-item>
      </van-swipe>

      <div class="module-block handle-block">
        <div class="balance-wrap flex-box">
          <div class="flex-box">
            <div class="balance-num">{{userInfo.account_balance || 0}}</div>
            <span class="balance-text">当前余额</span>
          </div>
          <div class="flex-box">
            <router-link class="record-jump-btn" :to="{name: 'RechargeRecord'}">充值记录></router-link>
            <router-link class="recharge-jump-btn" :to="{name: 'Recharge'}">充值</router-link>
          </div>
        </div>
        <div class="btns-wrap flex-box">
          <div class="function-btn deposit flex-box" @click="scanCode">
            <div>
              <img class="function-btn__icon" src="../resource/images/index/icon_1.png"/>
              存件
            </div>
          </div>
          <router-link class="function-btn myDeposit flex-box" :to="{name: 'Pickup'}">
            <div>
              <img class="function-btn__icon" src="../resource/images/index/icon_2.png"/>
              我的存件
            </div>
          </router-link>
        </div>
      </div>

      <div class="module-block">
        <router-link class="flex-box" style="margin-bottom: .15rem" :to="{name: 'Summary'}">
          <div class="flex-box">
            <img class="module-icon" src="../resource/images/index/statistics-icon.png"/>
            <span class="module-top-name">统计</span>
          </div>
          <img class="right-arrow" src="../resource/images/index/right-arrow.png"/>
        </router-link>
        <div class="module-column flex-box">
          <div class="module-title">本月消费金（元）</div>
          <div class="module-value">¥{{statistical.money || 0}}</div>
        </div>
        <div class="module-column flex-box">
          <div class="module-title">本月投件数（件）</div>
          <div class="module-value">{{statistical.counts || 0}}</div>
        </div>
        <div class="module-column flex-box">
          <div class="module-title">上月消费金（元）</div>
          <div class="module-value">¥{{statistical.money_last_month || 0}}</div>
        </div>
        <div class="module-column flex-box">
          <div class="module-title">上月投件数（件）</div>
          <div class="module-value">{{statistical.counts_last_month || 0}}</div>
        </div>
      </div>

      <div class="module-block">
        <!--            <router-link class="module-column flex-box" hover-class="none" url="/pages/siteQuery/siteQuery">
                        <div class="flex-box">
                            <img class="module-column__icon" src="/imgs/index/home-icon.png"></img>
                            <div class="module-title">网点查询</div>
                        </div>
                        <img class="right-arrow" src="/imgs/index/right-arrow.png"></img>
                    </router-link>-->
        <a class="module-column flex-box" href="tel: 18754547851">
          <div class="flex-box">
            <img class="module-column__icon" src="../resource/images/index/cs-icon.png"/>
            <div class="module-title">联系客服</div>
          </div>
          <img class="right-arrow" src="../resource/images/index/right-arrow.png"/>
        </a>
        <!--            <router-link class="module-column flex-box">
                        <div class="flex-box">
                            <img class="module-column__icon" src="/imgs/index/problem-icon.png"></img>
                            <div class="module-title">问题反馈</div>
                        </div>
                        <img class="right-arrow" src="/imgs/index/right-arrow.png"></img>
                    </router-link>-->
      </div>
    </div>
    <div class="pop-up-box" v-if="showTip">
      <div class="tips-box">
        <img class="tips-image" src="../resource/images/common/yuebuzu.png"/>
        <span class="tips-text">很抱歉，您的账户余额低于一元</span>
        <div class="btn-wrap btn-min" @click="showTip = false">
          <div class="btn">好的</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        userInfo: '',
        statistical: '',
        showTip: true,
        ifAgree: true
      }
    },
    computed: {
    },
    methods: {
      toChangePhone: function() {

      },
      scanCode: function() {

      },



    },
    mounted: function () {

    },
    created: function () {

    },
  }
</script>

<style scoped lang="less">
  /*@import "../resource/css/common.less";*/
  .userinfo-wrap{
    width: 100%;
    height: 120/200rem;
    line-height: 120/200rem;
    position: relative;
  }
  .userinfo-bg{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .userinfo-content{
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 0 25/200rem;
    height: 120/200rem;
  }

  .user-avatar{
    width: 80/200rem;
    height: 80/200rem;
    border-radius: 50%;
    overflow: hidden;
    display: block;
    border: 2/200rem solid #FFF;
    margin-right: 20/200rem;
  }
  .user-phone{
    font-size: 32/200rem;
    color: #FFF;
    letter-spacing: 2/200rem;
  }

  .right-arrow-white{
    width: 28/200rem;
    height: 41/200rem;
  }
  .index-content-wrap{
    padding: 25/200rem;
  }
  .swipe-img{
    border-radius: 12/200rem;
    width: 100%;
    height: 250/200rem;
  }

  .module-block{
    border-radius: 12/200rem;
    box-shadow: 0 4/200rem 10/200rem 4/200rem #E5F2FF;
    margin-top: 20/200rem;
    padding: 20/200rem 10/200rem;
  }
  .handle-block{
    padding: 0;
  }

  .balance-wrap{
    padding: 25/200rem;
  }
  .balance-wrap>.flex-box{
    flex-direction: column;
  }
  .balance-num{
    font-size: 46/200rem;
    color: #51A7FF;
    font-weight: bold;
    letter-spacing: 1/200rem;
    margin-bottom: 10/200rem;
  }
  .balance-text{
    font-size: 26/200rem;
    color: #7F7F7F;
  }
  .record-jump-btn{
    font-size: 26/200rem;
    color: #6BB2FF;
    margin-bottom: 20/200rem;
  }
  .recharge-jump-btn{
    font-size: 32/200rem;
    color: #FFF;
    width: 160/200rem;
    line-height: 60/200rem;
    border-radius: 12/200rem;
    background: linear-gradient(to right, #FFA32B, #FF7C25);
    text-align: center;
  }

  .function-btn{
    width: 50%;
    height: 100/200rem;
    font-size: 36/200rem;
    color: #FFF;
    justify-content: space-around;
  }
  .function-btn__icon{
    width: 48/200rem;
    height: 48/200rem;
    margin-right: 20/200rem;
    display: inline-block;
    vertical-align: top;
  }
  .deposit{
    background: linear-gradient(to right, #4AA3FE, #78BAFF);
    border-bottom-left-radius: 12/200rem;
  }
  .myDeposit{
    background: linear-gradient(to right, #FFB85B, #FF934B);
    border-bottom-right-radius: 12/200rem;
    position: relative;
  }
  .myDeposit>form{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .myDeposit button{
    width: 100%;
    height: 100%;
    background: transparent;
  }
  .myDeposit button:after{
    color: transparent;
  }

  .module-icon{
    width: 48/200rem;
    height: 48/200rem;
    margin-right: 16/200rem;
    display: inline-block;
    vertical-align: top;
  }
  .module-top-name{
    font-size: 32/200rem;
    font-weight: bold;
    color: #333;
  }
  .right-arrow{
    width: 22/200rem;
    height: 35/200rem;
  }
  .module-column{
    padding: 25/200rem;
    border-bottom: 1px solid #F7F7F7;
  }
  .module-title{
    font-size: 28/200rem;
    color: #333333;
  }
  .module-value{
    font-size: 28/200rem;
    font-weight: bold;
  }
  .module-column__icon{
    width: 34/200rem;
    height: 34/200rem;
    margin-right: 20/200rem;
  }
</style>
