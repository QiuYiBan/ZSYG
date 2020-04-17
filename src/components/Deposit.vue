<template>
  <div class="outer-wrapper">
    <div class="box-list-wrap">
      <div class="box-list__tip">请选择需要存放的柜子</div>
      <div class="box-list flex-box">
        <div :class="['box-item', {'box-item--checked':gridType==3}]" @click="chooseGrid(3)">
          <div class="box__name">大柜</div>
          <div class="box__num">{{gridNum.big_grid}}</div>
          <div class="box-cost">¥{{gridCost.collect_fees==0?'0.00':gridCost.big_cabinet}}</div>
        </div>
        <div :class="['box-item', {'box-item--checked':gridType==2}]" @click="chooseGrid(2)">
          <div class="box__name">中柜</div>
          <div class="box__num">{{gridNum.medium_grid}}</div>
          <div class="box-cost">¥{{gridCost.collect_fees==0?'0.00':gridCost.middle_cabinet}}</div>
        </div>
        <div :class="['box-item', {'box-item--checked':gridType==1}]" @click="chooseGrid(1)">
          <div class="box__name">小柜</div>
          <div class="box__num">{{gridNum.small_grid}}</div>
          <div class="box-cost">¥{{gridCost.collect_fees==0?'0.00':gridCost.small_cabinet}}</div>
        </div>
      </div>
    </div>
    <div class="register-input-wrap">
      <div class="register-input__title">柜型</div>
      <div :class="['register-input', 'box-select-show', {'pl-style':gridType==0}]">
        {{gridType==0?'请选择要存放的柜子':gridType==1?'小柜':gridType==2?'中柜':'大柜'}}
      </div>
    </div>
    <div class="register-input-wrap">
      <div class="register-input__title">快递单号</div>
      <van-field type="number" id="express-input" class="register-input"
             placeholder="拍照识别或输入快递单号" v-model="expressNum" placeholder-class="pl-style"
             @input="userInputEvent"
      />
      <img class="camera-btn" src="../resource/images/common/scan.png" @click="scanCode"/>
    </div>
    <div class="register-input-wrap">
      <div class="register-input__title">手机号</div>
      <van-field type="number" id="tel-input" class="register-input"
             placeholder="拍照识别或输入手机号码" v-model="phoneNum" placeholder-class="pl-style"
             @input="userInputEvent"
      />
      <img class="camera-btn" src="../resource/images/common/camera.png" @click="choosePicture"/>
    </div>
    <div class="btn-wrap btn-big" @click="deposit">
      <button class="btn">存件</button>
    </div>


    <div class="pop-up-box" v-if="depositStatus == -106">
      <div class="tips-box">
        <img class="tips-image" src="../resource/images/common/CJSB-2.png" style="width: 1.955rem;height: 1.325rem"/>
        <span class="tips-text">{{depositStatusMsg}}</span>
        <div class="btn-wrap btn-min" @click="closeTip">
          <div class="btn">好的</div>
        </div>
      </div>
    </div>
    <div class="pop-up-box" v-if="depositStatus == -105">
      <div class="tips-box">
        <img class="tips-image" src="../resource/images/common/CJSB-0.png"/>
        <span class="tips-text">{{depositStatusMsg}}</span>
        <div class="btn-wrap btn-min" @click="closeTip">
          <div class="btn">好的</div>
        </div>
      </div>
    </div>


    <!--存件回调-->
    <div class="status-box" v-if="status != 0">
      <!--开箱成功-->
      <template v-if="status == 1">
        <img src="../resource/images/common/KXCG.png" class="note-img"/>
        <div class="main-notes">{{gridName}} 开箱成功</div>
        <div class="sub-notes">开箱成功请您及时存件~</div>
        <div class="notes-btns flex-box">
          <div class="btn-wrap btn-min" @click="continueDeposit">
            <div class="btn">继续</div>
          </div>
          <!--                <navigator class="btn-wrap btn-min" hover-class="none" url="/pages/index/index" open-type="redirect">
                              <div class="btn">更换网点</div>
                          </navigator>-->
        </div>
      </template>

      <!--开箱失败-->
      <template v-if="status == 2">
        <img src="../resource/images/common/KXSB.png" class="note-img" style="margin-bottom: .2rem"/>
        <div class="sub-notes">{{statusMsg}}</div>
        <div class="notes-btns flex-box">
          <div class="btn-wrap btn-min" @click="closeStatusBox">
            <div class="btn">返回</div>
          </div>
        </div>
      </template>
    </div>

    <!--手机号选择-->
    <template v-if="showTelCheck">
      <div class="tel-check-box">
        <div class="tel-check-box__title">请选择手机号码</div>
        <van-radio-group v-model="phoneNum" class="radio-group flex-box" @change="radioChange">
          <van-radio :name="item" class="radio" v-for="(item, index) in phoneList" :key="index" color="#FF8C5F">
            {{item}}
          </van-radio>
        </van-radio-group>
      </div>
    </template>
  </div>

</template>

<script>
  export default {
    name: "",
    data() {
      return {
        expressNum: '',
        phoneNum: '',
        gridType: 0,
        depositStatus: 0,     //   存件状态
        depositStatusMsg: '',
        gridNum: [],
        gridCost: [],
        siteId: '',
        locationId: '',
        status: 0,     //   开箱后状态
        statusMsg: '',
        gridName: '',
        submitImgList: [],
        phoneList: [],
        expressnumList: [],
        showTelCheck: false
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
  .box-list-wrap{
    margin-bottom: 80/200rem;
  }
  .box-list__tip{
    font-size: 28/200rem;
    font-weight: bold;
    margin-bottom: 30/200rem;
  }
  .box-item{
    width: 31%;
    border-radius: 12/200rem;
    overflow: hidden;
    opacity: .6;
  }
  .box-item--checked{
    opacity: 1;
    box-shadow: 0 4/200rem 10/200rem 4/200rem #E5F2FF;
    transition: all .5s;
  }
  .box__name{
    background: #6FA9F8;
    text-align: center;
    letter-spacing: 20/200rem;
    text-indent: 20/200rem;
    color: #FFF;
    font-size: 28/200rem;
    font-weight: bold;
    line-height: 70/200rem;
  }
  .box__num{
    font-size: 60/200rem;
    font-weight: bold;
    text-align: center;
    line-height: 140/200rem;
  }
  .box-cost{
    font-size: 30/200rem;
    color: #FFF;
    text-align: center;
    line-height: 80/200rem;
    background: #FF8C5F;
  }

  view.btn-big>.btn{
    letter-spacing: 40/200rem;
  }
  .btn-wrap{
    margin: 0 auto;
    display: block;
  }


  .box-select-show{
    line-height: 80/200rem;
  }

  .note-img{
    width: 475/200rem;
    height: 446/200rem;
    margin: .4/200rem auto 0;
  }
  .sub-notes{
    display: block;
    font-size: 28/200rem;
    color: #A6A6A6;
    text-align: center;
    margin-bottom: 30/200rem;
  }
  .main-notes{
    font-size: 32/200rem;
    color: #4D98FF;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30/200rem;
  }
  .notes-btns{
    margin: 40/200rem 0 40/200rem;
  }
  .btn{
    letter-spacing: 0;
    text-indent: 0;
    display: block;
    width: 100%;
    border: 0;
    padding: 0;
  }
  .btn-min{
    width: 30%;
  }

  .status-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFF;
    z-index: 500;
  }

  .van-cell{
    padding: 0;
  }



  .camera-btn{
    width: 60/200rem;
    height: 60/200rem;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 100;
  }


  .tel-check-box{
    width: 80%;
    height: 500/200rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 100;
    background: #FFF;
    border: 1px solid #ebebeb;
    border-radius: 12/200rem;
    overflow: hidden;
    box-shadow: 0 4/200rem 10/200rem 4/200rem #E5F2FF;
  }
  .radio-group{
    width: 100%;
    height: 400/200rem;
    padding: 25/200rem;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    overflow: scroll;
    box-sizing: border-box;
  }
  .radio{
    margin-bottom: 25/200rem;
  }
  .tel-check-box__title{
    line-height: 100/200rem;
    font-size: 34/200rem;
    padding: 0 25/200rem;
    /*font-weight: bold;*/
    color: #FFF;
    background: #6FA9F8;
    text-align: center;
    letter-spacing: 1.2/200rem;
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
  .register-input-wrap{
    position: relative;
    line-height: 1.5;
    margin-bottom: 25/200rem;
  }

</style>
