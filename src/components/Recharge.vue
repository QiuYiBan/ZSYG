<template>
  <div class="outer-wrapper">
    <div class="userinfo-wrap flex-box">
      <div class="user-avatar"></div>
      <div class="user-name">{{userInfo.full_name}}</div>
      <div class="user-phone">{{userInfo.cell_phone}}</div>
    </div>
    <div class="balance-wrap">
      <img class="balance-wrap__bg" src="../resource/images/recharge/account-balance-bg.png" />
      <div class="balance-num">¥{{userInfo.account_balance || 0}}</div>
    </div>
    <div class="recharge-handle-wrap">
      <div class="recharge-handle__title flex-box">
        <img class="recharge-handle__icon" src="../resource/images/recharge/recharge-icon.png" />
        账户充值
      </div>
      <div class="recharge-num-list flex-box">
        <template v-for="(item, index) in rechargeNumList">
          <div :class="[rechargeNumIndex==index?'recharge-num-item recharge-num-item--checked':'recharge-num-item']"
                @click="chooseRechargeNum(index)">¥{{item}}</div>
        </template>
      </div>
      <input class="recharge-input" type="number" bindinput="userInput" bindfocus="inputFocus"
             placeholder="在这里输入您想充值的金额" placeholder-class="pl-style" v-model="rechargeShowNum"/>
    </div>
    <div class="btn-wrap btn-big" @click="recharge">
      <div class="btn">立即充值</div>
    </div>
    <router-link :to="{name: 'RechargeRecord'}" class="recharge-record-jump">充值记录查询</router-link>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        userInfo: '',
        rechargeShowNum:0,
        rechargeNumList: [],


      }
    },
    methods: {
      recharge: function() {

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

  .outer-wrapper{
    padding: 25/200rem;
  }
  .userinfo-wrap{
    justify-content: flex-start;
    margin-bottom: 30/200rem;
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
  .user-phone,.user-name {
    font-size: 30/200rem;
    font-weight: bold;
    letter-spacing: 2/200rem;
    margin-right: 14/200rem;
  }
  .balance-wrap{
    width: 100%;
    height: 100/200rem;
    position: relative;
    margin-bottom: 40/200rem;
  }
  .balance-wrap__bg{
    width: 100%;
    height: 100%;
  }
  .balance-num{
    font-size: 40/200rem;
    color: #FFF;
    line-height: 100/200rem;
    position: absolute;
    top: 0;
    right: 40/200rem;
    letter-spacing: 1.5/200rem;
    font-weight: bold;
  }
  .recharge-handle-wrap{
    margin-bottom: 1rem;
  }
  .recharge-handle__title{
    margin-bottom: 35/200rem;
    font-size: 30/200rem;
    font-weight: bold;
    letter-spacing: 2/200rem;
    justify-content: flex-start;
  }
  .recharge-handle__icon{
    width: 38/200rem;
    height: 38/200rem;
    margin-right: 10/200rem;
  }
  .recharge-num-list{
    flex-wrap: wrap;
    margin-bottom: 20/200rem;
  }
  .recharge-num-item{
    width: 30%;
    line-height: 80/200rem;
    text-align: center;
    color: #FF9132;
    font-size: 36/200rem;
    font-weight: bold;
    border: 1px solid #FFB779;
    border-radius: 12/200rem;
    margin-bottom: 30/200rem;
    letter-spacing: 1.5/200rem;
  }
  .recharge-num-item--checked{
    border: 0;
    background: linear-gradient(to right, #FF7F31, #FEA822);
    color: #FFF;
  }
  .recharge-input{
    height: 80/200rem;
    width: 100%;
    border-radius: 12/200rem;
    border: 1px solid #FF9C76;
    font-size: 30/200rem;
    padding: 0 25/200rem;
    font-weight: bold;
  }
  .pl-style{
    color: #A7A7A7;
    font-size: 26/200rem;
    font-weight: normal;
  }
  .btn-wrap{
    border-color: #FFC184;
  }
  .btn{
    background: linear-gradient(to right, #FFAB78, #FFB94B);
  }
  .recharge-record-jump{
    width: 100%;
    text-align: center;
    color: #5BA8FF;
    font-size: 26/200rem;
    text-decoration: underline;
    margin-top: 40/200rem;
    display: block;
  }

</style>
