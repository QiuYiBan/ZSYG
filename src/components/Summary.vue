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
    <div class="statistics-wrap">
      <div class="statistics-table">
        <img class="statistics-bg" src="../resource/images/common/tj-bg.png"/>
        <div class="statistics-box flex-box">
          <div class="statistics-box__item flex-box">
            <div>{{statistical.cost || 0}}</div>
            <span>消费金 (元)</span>
          </div>
          <div class="statistics-box__item flex-box">
            <div>{{statistical.couns || 0}}</div>
            <span>投件数 (件)</span>
          </div>
        </div>
      </div>
      <div class="statistics-time">
        {{statistical.minTime}} ~ {{statistical.maxTime}}
      </div>
      <div class="delivery-list">
        <div class="delivery-list__title flex-box">
          <img class="tj-icon" src="../resource/images/common/tongji-icon.png"/>
          投件明细
        </div>
        <template v-if="countList.length != 0">
          <template v-for="(item, index) in countList">
            <div class="delivery-item flex-box">
              <div>
                <div class="delivery-address">{{item.location_name}}</div>
                <div class="delivery-site">{{item.grid_type==1?'小柜':item.grid_type==2?'中柜':'大柜'}}：{{item.grid_code}}</div>
              </div>
              <div>
                <div class="delivery-time">{{item.creation_time}}</div>
                <div class="delivery-cost">-{{item.inventory_cost}}</div>
              </div>
            </div>
          </template>
        </template>
        <template v-else>
          <div class="empty-tips">~暂无投件明细~</div>
        </template>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "",
    data() {
      return {
        tabList: ['当月','上月','总计'],
        type: 1,
        curPage: 1,
        lastPage: false,
        countList: [],
        statistical: []
      }
    },
    computed: {},
    methods: {
      changeTab: function(index) {
        console.log(index);
        this.type = index;
        this.countList = [];
        this.curPage = 1;
      }

    },
    mounted: function () {

    },
    created: function () {

    },
  }
</script>

<style scoped lang="less">

  .tab-list{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #FFF;
    z-index: 100;
    border-bottom: 1px solid #F9F8F7;
  }
  .tab-item,.tab-item--checked{
    width: 33.3%;
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
  .statistics-wrap{
    margin-top: 100/200rem;
    padding: 25/200rem;
  }
  .statistics-table{
    width: 100%;
    height: 180/200rem;
    position: relative;
  }
  .statistics-bg{
    width: 100%;
    height: 100%;
  }
  .statistics-box{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .statistics-box__item{
    width: 50%;
    height: 60%;
    text-align: center;
    color: #FFF;
    flex-direction: column;
    justify-content: space-around;
  }
  .statistics-box__item>div{
    font-size: 42/200rem;
    font-weight: bold;
  }
  .statistics-box__item>span{
    font-size: 28/200rem;
  }
  .statistics-time{
    line-height: 90/200rem;
    font-size: 28/200rem;
    text-align: center;
    border-radius: 12/200rem;
    box-shadow: 0 4/200rem 10/200rem 4/200rem #E5F2FF;
  }
  .delivery-list{
    margin: 60/200rem 0;
    box-shadow: 0 4/200rem 10/200rem 4/200rem #E5F2FF;
    width: 100%;
    border-radius: 12/200rem;
    padding: 30/200rem 10/200rem;
  }
  .delivery-list__title{
    justify-content: flex-start;
    margin-bottom: 20/200rem;
    font-size: 34/200rem;
    font-weight: bold;
    padding-left: 35/200rem;
  }
  .tj-icon{
    width: 42/200rem;
    height: 46/200rem;
    margin-right: 14/200rem;
  }
  .delivery-item{
    width: 100%;
    margin-top: 40/200rem;
    padding: 10/200rem 25/200rem;
    border-bottom: 1px solid #F8F8F8;
  }


  .delivery-address,.delivery-site{
    font-size: 28/200rem;
    color: #494949;
  }
  .delivery-address{
    margin-bottom: 20/200rem;
  }
  .delivery-time{
    font-size: 26/200rem;
    color: #666666;
    margin-bottom: 20/200rem;
  }
  .delivery-cost{
    font-size: 30/200rem;
    color: #EA6E39;
    font-weight: bold;
    text-align: right;
  }

  .empty-tips{
    margin: 120/200rem 0;
  }

</style>
