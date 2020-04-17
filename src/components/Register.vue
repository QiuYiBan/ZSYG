<template>
  <div class="outer-wrapper">
    <div class="register-title module-block">
      用手机号注册您的账户
      <div class="pl-style">注册账号轻松使用</div>
    </div>
    <div class="module-block border-bottom">
      <div class="register-input-wrap">
        <div class="register-input__title">手机号</div>
        <div v-if="backCount==0" class="getcode-btn" @click="getIdentifyCode">获取验证码</div>
        <div v-else class="getcode-btn">{{backCount}}s</div>
        <van-form>
          <van-field type="tel" id="tel-input" class="register-input" maxlength="11" v-model="userPhone"
                     placeholder="请输入您的手机号码" placeholder-class="pl-style"
                     @blur="userInputEvent" :rules="[{ required: true, message: '请填写手机号' }]"
          ></van-field>
        </van-form>
      </div>
      <div class="register-input-wrap">
        <div class="register-input__title">验证码</div>
        <van-form>
          <van-field type="digit" id="code-input" class="register-input" v-model="code"
                     placeholder="请输入您的验证码" placeholder-class="pl-style"
                     @blur="userInputEvent" :rules="[{ required: true, message: '请填写验证码' }]"
          ></van-field>
        </van-form>
      </div>
    </div>
    <div class="module-block border-bottom">
      <div class="register-input-wrap">
        <div class="register-input__title">快递公司</div>
        <van-field class="pl-style picker-value" readonly placeholder="请选择快递公司" v-model="express" right-icon="arrow-down" @click="showExpressPicker = true"></van-field>
        <van-popup v-model="showExpressPicker" position="bottom">
          <van-picker id="express-picker" show-toolbar :columns="expressList" @cancel="showExpressPicker = false" @confirm="userPickerEvent"/>
        </van-popup>
      </div>
      <div class="register-input-wrap">
        <div class="register-input__title">城市</div>
        <van-field class="pl-style picker-value" readonly placeholder="请选择城市" v-model="cityText" right-icon="arrow-down" @click="showCityPicker = true"></van-field>
        <van-popup v-model="showCityPicker" position="bottom">
          <van-area
            :area-list="areaList"
            :address-info="addressInfo"
            :columns-placeholder="['请选择', '请选择', '请选择']"
            @confirm="onConfirm"
            @cancel="showCityPicker = false"
          />
        </van-popup>
      </div>
    </div>
    <div class="module-block">
      <div class="register-input-wrap">
        <div class="register-input__title">姓名</div>
        <van-form>
          <van-field type="text" id="username-input" class="register-input" v-model="name"
                     placeholder="姓名必须与上传证件一致" placeholder-class="pl-style"
                     @blur="userInputEvent" :rules="[{ required: true, message: '请填写姓名' }]"
          ></van-field>
        </van-form>
      </div>
      <div class="register-input-wrap">
        <div class="register-input__title">身份证号</div>
        <van-form>
          <van-field type="text" id="userid-input" class="register-input" v-model="idcard"
                     placeholder="身份证号必须与上传证件一致" placeholder-class="pl-style"
                     @blur="userInputEvent" :rules="[{ required: true, message: '请填写身份证号' }]"
          ></van-field>
        </van-form>
      </div>
      <div class="register-input-wrap">
        <div class="register-input__title">上传身份证</div>
        <div class="idcard-wrap flex-box">
          <div class="upload-img-wrap flex-box">
            <template v-if="idcardImg[0]">
              <van-uploader :after-read="chooseLeftIdcard" :before-read="imgCheck">
                <img class="idcard-icon" :src="idcardImg[0]"/>
              </van-uploader>
            </template>
            <template v-else>
              <van-uploader :after-read="chooseLeftIdcard" :before-read="imgCheck">
                <img class="idcard-icon" src="../resource/images/common/zm_icon.png"/>
              </van-uploader>
            </template>
          </div>
          <div class="upload-img-wrap flex-box">
            <template v-if="idcardImg[1]">
              <van-uploader :after-read="chooseRightIdcard" :before-read="imgCheck">
                <img class="idcard-icon" :src="idcardImg[1]"/>
              </van-uploader>
            </template>
            <template v-else>
              <van-uploader :after-read="chooseRightIdcard" :before-read="imgCheck">
                <img class="idcard-icon" src="../resource/images/common/bm_icon.png"/>
              </van-uploader>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="user-protocol-wrap flex-box" @click="checkAgreement">
      <van-icon name="passed" :color="iconColor" size="16" />
      我同意 <span @click.stop="toProtocol">《智能快递柜云快递员使用协议》</span>
    </div>
    <div class="btn-wrap btn-min">
      <div class="btn" @click="submit">提交</div>
    </div>
  </div>

</template>

<script>
  import areaList from "../assets/area.js"
  import { GetSMS } from '../util/api'
  export default {
    name: "",
    data() {
      return {
        areaList,
        expressList: [{text: '顺丰', id: 1, name: 'shunfeng'}, {text: '中通', id: 2, name: 'zhongtong'}],
        userPhone: '',
        code: '',
        express: '',
        expressId: '1',
        city: [],
        cityText: '',
        addressInfo: {},
        name: '',
        idcard: '',
        idcardImg: [],
        backCount: 0,
        ifSendMessage: false,
        ifAgree: true,
        showExpressPicker: false,
        showCityPicker: false,
      }
    },
    computed: {
      iconColor: function() {
        return this.ifAgree ? '#599DF5' : '#333'
      }

    },
    methods: {
      userInputEvent: function(e) {
        let id = e.target.id, value = e.target.value;
        id == 'tel-input'? this.userPhone = value :
          id == 'code-input'? this.code = value :
            id == 'username-input'? this.name = value :
              this.idcard = value;
      },
      userPickerEvent: function(value) {
        console.log(value);
      },
      onConfirm: function(value) {
        this.cityText = '';
        for(let v of value) {
          this.cityText += v.name
        }
        this.city = value;
        this.showCityPicker = false;
      },
      //  选择图片
      chooseRightIdcard: function(file) {
        this.imageHandle(1, file)
      },
      chooseLeftIdcard: function(file) {
        this.imageHandle(0, file)
      },
      //  图片处理
      imageHandle: function(index, file) {
        this.idcardImg[index] = file.content;
        this.idcardImg = [...this.idcardImg];
        console.log(this.idcardImg);
      },
      imgCheck: function(file) {
        console.log(file);
        if(file.size > 2048000) {
          this.$toast.fail('上传文件不能超过2M');
          return false
        }
        return true
      },

      checkPhone(number) {
        let reg = new RegExp(/^1[3456789]\d{9}$/);
        if (number.length != 11 || !reg.test(number)) {
          this.$toast.fail('手机号有误，请重新输入');
          return false;
        } else {
          return true;
        }
      },
      //  倒计时
      countDown: function () {
        let backCount = 60, that = this;
        let timer = setInterval(() => {
          backCount--;
          that.backCount = backCount;
          if (that.backCount == 0) {
            clearInterval(timer);
            that.ifSendMessage = false;
            return;
          }
        }, 1000)
      },
      preventDoubleClick: function(cb) {
        this.ifSendMessage = true;
        if(this.ifSendMessage) {
          return cb(this.ifSendMessage)
        }
      },
      //  获取验证码
      getIdentifyCode: function () {
        let telNum = this.data.userPhone, ifSendMessage = this.data.ifSendMessage;
        let timer = null;
        if (!this.checkPhone(telNum)) return;
        if(ifSendMessage) return;
        this.preventDoubleClick(res => {
          console.log(res);
          this.countDown();
          api.GetSMS({phone: telNum}).then(res => {
            console.log(res);
            if (res.data.code != 0) {
              wx.showModal({
                title: '提示',
                content: res.data.msg,
                showCancel: false,
                success: res => {
                }
              })
            }
          })
        })
      },
      //  提交
      submit: function() {
        if(this.data.userPhone.length == 0) {
          return util.showToast('请输入手机号码', 'none')
        } else if(this.data.code.length == 0) {
          return util.showToast('请输入验证码', 'none')
        } else if(this.data.express.length == 0) {
          return util.showToast('请选择快递公司', 'none')
        } else if(this.data.city.length == 0) {
          return util.showToast('请选择城市', 'none')
        } else if(this.data.name.length <= 1) {
          return util.showToast('用户名有误，请重新填写', 'none')
        } else if(this.data.idcard.length == 0) {
          return util.showToast('请填写身份证号', 'none')
        } else if(!this.data.idcardImg[0]) {
          return util.showToast('请上传身份证正面照', 'none')
        } else if(!this.data.idcardImg[1]) {
          return util.showToast('请上传身份证背面照', 'none')
        } else if(!this.data.ifAgree) {
          return util.showToast('请勾选使用协议', 'none')
        }

        util.showLoading().then(() => {
          api.UploadIDCard(this.data.idcardImg[0]).then(res => {
            console.log(res);
            let ZM = JSON.parse(res.data).src;
            api.UploadIDCard(this.data.idcardImg[1]).then(res => {
              let FM = JSON.parse(res.data).src;
              api.Register({
                'courier.cell_phone': this.data.userPhone,
                'smsCode': this.data.code,
                'courier.company_id': this.data.expressId,
                'courier.province': this.data.city[0],
                'courier.city': this.data.city[1],
                'courier.area': this.data.city[2],
                'courier.full_name': this.data.name,
                'courier.id_card': this.data.idcard,
                'courier.id_card_positive': ZM,
                'courier.id_card_back': FM
              }).then(res => {
                console.log('注册返回数据：',res);

                if(res.data.code == 0) {
                  wx.hideLoading();
                  api.Login();
                  wx.redirectTo({url: '/pages/index/index'});
                }
              })
            })
          })
        })

      },
      //  同意协议
      checkAgreement: function() {
        this.ifAgree = !this.ifAgree
      },



    },
    mounted: function () {

    },
    created: function () {

    },
  }
</script>

<style scoped lang="less">

  .outer-wrapper{
    padding-bottom: 80/200rem;
  }
  .register-title{
    font-size: 34/200rem;
    color: #000;
    font-weight: bold;
    line-height: 2;
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
    justify-content: center;
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
  .user-protocol-wrap>i{
    margin-right: 10/200rem;
  }
  .btn-wrap{
    /*margin-bottom: 80/200rem;*/
  }


  /*>-----resetUI-------*/
  .van-cell{
    padding: 0;
  }
  .van-cell:not(:last-child)::after {
    border-bottom: 0;
  }
  [class*=van-hairline]::after{
    border: 0;
  }
</style>
