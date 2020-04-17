<template>
  <div class="outer-wrapper">
    <div class="recharge-record-wrap">
      <img class="recharge-record__bg" src="../resource/images/recharge/recharge-record-bg.png" />
      <div class="recharge-totalPrice flex-box">
        <div>{{totalRecharge}}</div>
        <span>累计充值 (元)</span>
      </div>
    </div>
    <div class="module-block recharge-record-list">
      <div class="recharge-record-title flex-box">
        <img class="recharge-record-icon" src="../resource/images/recharge/recharge-record-icon.png" />
        充值记录
      </div>
      <template v-for="(item, index) in recordList">
        <div class="recharge-record-item flex-box">
          <div class="recharge-record-item__text">成功充值 <span>{{item.amount}}</span></div>
          <div class="recharge-record-item__time">{{item.creation_time}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        totalRecharge: 0,
        recordList: [],

      }
    },
    methods: {},
    computed: {},
    mounted: function () {

    },
    created: function () {

    },
  }
</script>

<style scoped lang="less">
  .outer-wrapper{
    padding: 25/200rem;
  }

  .recharge-record-wrap{
    position: relative;
    width: 100%;
    height: 180/200rem;
    margin-bottom: 80/200rem;
  }
  .recharge-record__bg{
    width: 100%;
    height: 100%;
  }
  .recharge-totalPrice{
    flex-direction: column;
    padding: 40/200rem 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    color: #FFF;
  }
  .recharge-totalPrice>div{
    font-size: 46/200rem;
    font-weight: bold;
  }

  .recharge-totalPrice>span{
    font-size: 26/200rem;
  }

  .recharge-record-title{
    font-size: 32/200rem;
    font-weight: bold;
    justify-content: flex-start;
    letter-spacing: 2/200rem;
    padding: 0 25/200rem;
    margin-bottom: 25/200rem;
  }
  .recharge-record-icon{
    width: 35/200rem;
    height: 40/200rem;
    margin-right: 16/200rem;
  }

  .recharge-record-item{
    padding: 25/200rem;
    border-bottom: 1rpx solid #F6F6F6;
  }
  .recharge-record-item__text{
    font-size: 30/200rem;
    color: #333333;
  }
  .recharge-record-item__text>span{
    font-size: 34/200rem;
    color: #EA6C35;
    font-weight: bold;
  }
  .recharge-record-item__time{
    font-size: 24/200rem;
    color: #757575;
  }







</style>
