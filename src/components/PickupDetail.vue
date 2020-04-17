<template>
  <div class="outer-wrapper">
    <div class="pickup-info-warp">
      <div class="pickup-top flex-box">
        <div class="pickup-top-column flex-box">
          <div class="package-state">{{pickupDetail.order_state==1?'待取件':pickupDetail.order_state==2?'已取件':'存件中'}}</div>
          <div class="site-name">柜门编号 {{pickupDetail.grid_code}}</div>
        </div>
        <div class="pickup-top-column flex-box">
          <div class="deposit-time">存件时间 {{pickupDetail.inventory_time}}</div>
          <div class="pickup-time" v-if="pickupDetail.order_state==2">取件时间 {{pickupDetail.access_time}}</div>
        </div>
      </div>
      <div class="pickup-center flex-box">
        <div>
          <div class="package-address">{{pickupDetail.location_name}}{{pickupDetail.location_address}}</div>
          <div class="express-info">{{pickupDetail.company_name}} {{pickupDetail.tracking_number}}</div>
          <div class="consignee">收件人 {{pickupDetail.user_cell_phone}}</div>
          <div class="timeout-tip flex-box" v-if="pickupDetail.timeout > 0">
            <img class="clock-icon" src="../resource/images/common/clock-icon.png"/>
            已超时{{pickupDetail.timeout_text}}
          </div>
        </div>
        <img class="pickup-type" v-if="pickupDetail.picker!=0" :src="require(`../resource/images/common/${pickupDetail.picker==1?'KHQC':pickupDetail.picker==2?'KDYQC':'GLYQC'}.png`)"/>
      </div>
      <div class="contact-consignee" @click="callRecipient">联系收件人</div>
    </div>
    <div class="pickup-btns flex-box" v-if="pickupDetail.order_state==1">
      <div class="btn-wrap btn-min" @click="openGrid">
        <div class="btn">取件</div>
      </div>
      <div class="btn-wrap btn-min" @click="resendInfo">
        <div class="btn resend-btn">重发信息</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        pickupDetail: [],
        id: ''
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
  page{
    background: #F5F4F2;
  }
  .outer-wrapper{
    padding: 25/200rem;
  }

  .pickup-info-warp{
    width: 100%;
    border-radius: 12/200rem;
    overflow: hidden;
  }
  .pickup-top{
    padding: 30/200rem;
    background: linear-gradient(to right, #77B9FE, #4BA4FF);
    color: #FFF;
  }
  .package-state{
    font-size: 32/200rem;
    font-weight: bold;
  }
  .site-name{
    font-size: 28/200rem;
  }
  .deposit-time,.pickup-time{
    font-size: 28/200rem;
  }
  .pickup-top-column{
    align-items: flex-start;
    justify-content: flex-end;
    height: 100/200rem;
    flex-direction: column;
    line-height: 1.8;
  }
  .pickup-center{
    background: #FFF;
    padding: 30/200rem;
    border-bottom: 1px solid #F6F6F6;
    align-items: flex-end;
  }
  .package-address,.express-info,.consignee{
    font-size: 28/200rem;
    color: #333333;
    margin-bottom: 20/200rem;
  }
  .timeout-tip{
    justify-content: flex-start;
    font-size: 28/200rem;
    color: #FF8C5F;
    font-weight: bold;
  }
  .clock-icon{
    width: 40/200rem;
    height: 38/200rem;
    margin-right: 10/200rem;
  }
  .pickup-type{
    width: 137/200rem;
    height: 142/200rem;
  }
  .contact-consignee{
    width: 100%;
    text-align: center;
    font-size: 30/200rem;
    font-weight: bold;
    color: #54A8FF;
    line-height: 100/200rem;
    background: #FFF;
  }
  .pickup-btns{
    width: 100%;
    margin: 100/200rem 0;
    justify-content: space-around;
    padding: 0 10%;
  }

  .btn-min{
    width: 40%;
  }
  .resend-btn{
    letter-spacing: 0;
    text-indent: 0;
  }













</style>
