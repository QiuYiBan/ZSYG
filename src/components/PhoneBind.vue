<template>
  <div class="outer-wrapper">
    <template v-if="!ifBind">
      <div class="register-title module-template">
        绑定您的手机号
        <div class="pl-style">绑定您的手机号来进行接下去的操作</div>
      </div>
      <div class="module-template">
        <div class="register-input-wrap">
          <div class="register-input__title flex-box">
            <img class="register-input__icon" src="../resource/images/common/tel-icon.png"/>
            手机号
          </div>
          <div v-if="backCount==0" class="getcode-btn" @click="getIdentifyCode">获取验证码</div>
          <div v-else class="getcode-btn">{{backCount}}s</div>
          <van-field type="number" id="tel-input" class="register-input" maxlength="11"
                 placeholder="请输入您的手机号码" placeholder-class="pl-style"
                 @blur="userInputEvent" v-model="phone"
          />

        </div>
        <div class="register-input-wrap">
          <div class="register-input__title flex-box">
            <img class="register-input__icon" src="../resource/images/common/code-icon.png"/>
            验证码
          </div>
          <van-field type="number" id="code-input" class="register-input"
                 placeholder="请输入您的验证码" placeholder-class="pl-style"
                 @blur="userInputEvent" v-model="code"
          />
        </div>
      </div>
      <div class="btn-wrap btn-min">
        <div class="btn" @click="bind">确认绑定</div>
      </div>
    </template>
    <template v-else>
      <img class="bind-icon" src="../resource/images/common/bind-icon.png"/>
      <div class="bind-tip">您已绑定尾号为<span>{{tailNum}}</span>的手机号</div>
      <div class="btn-wrap btn-min">
        <div class="btn" @click="unbind">解除绑定</div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        backCount: 0,
        ifSendMessage: false,
        ifBind: false,
        phone: '',
        code: '',
        tailNum: '',
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
    padding: .125rem;
    padding-bottom: 80/200rem;
  }
  .register-title{
    font-size: 34/200rem;
    color: #000;
    font-weight: bold;
    line-height: 2;
    margin-bottom: 40/200rem;
  }
  .pl-style{
    font-size: 26/200rem;
    color: #999999;
    font-weight: normal;
  }
  .module-block{
    padding: 30/200rem;
    padding-bottom: 0;
  }
  .border-bottom{
    border-bottom: 25/200rem solid #F5F4F2;
  }
  .register-input-wrap{
    position: relative;
    line-height: 1.5;
    margin-bottom: 25/200rem;
  }
  .register-input__title{
    font-size: 32/200rem;
  }
  .register-input{
    font-size: 26/200rem;
    border-bottom: 1px solid #F8F8F8;
    padding-right: 50/200rem;
    height: 80/200rem;
    line-height: 80/200rem;
  }
  #tel-input{
    padding-right: 220/200rem;
  }
  .getcode-btn{
    padding: 0 15/200rem;
    line-height: 60/200rem;
    border: 1px solid #72B7FE;
    color: #72B7FE;
    font-size: 26/200rem;
    border-radius: 12/200rem;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 100;
  }
  .down-arrow{
    width: 22/200rem;
    height: 35/200rem;
    transform: rotate(90deg);
    position: absolute;
    right: 6/200rem;
    bottom: 22/200rem;
    z-index: 100;
  }
  .picker-value{
    line-height: 80/200rem;
    border-bottom: 1px solid #F8F8F8;
  }
  .idcard-wrap{
    width: 100%;
    padding: 60/200rem 0;
  }
  .upload-img-wrap{
    width: 50%;
  }
  .idcard-icon{
    width: 270/200rem;
    height: 215/200rem;
    margin: 0 auto;
  }
  .user-protocol-wrap{
    justify-content: flex-start;
    font-size: 28/200rem;
    color: #333333;
    padding: 25/200rem;
    margin-bottom: 40/200rem;
  }
  .user-protocol-wrap>span{
    color: #599DF5;
  }
  .user-protocol-wrap>icon{
    margin-right: 10/200rem;
  }
  .btn-wrap{
    /*margin-bottom: 80/200rem;*/
  }

  .register-input__title{
    justify-content: flex-start;
  }
  .register-input__icon{
    width: 41/200rem;
    height: 44/200rem;
    margin-right: 20/200rem;
  }

  .btn-wrap{
    margin-top: 100/200rem;
  }

  .btn-min>.btn{
    letter-spacing: 0;
    text-indent: 0;
  }
  .bind-icon{
    width: 475/200rem;
    height: 446/200rem;
    margin: 100/200rem auto;
  }
  .bind-tip{
    font-size: 28/200rem;
    color: #323232;
    text-align: center;
  }
  .bind-tip>span{
    color: #419EFE;
  }
</style>
