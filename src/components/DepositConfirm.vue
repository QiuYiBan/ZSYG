<template>
  <div class="outer-wrapper">
    <!--存件回调-->
    <div class="status-box" v-if="status != 0">
      <!--开箱成功-->
      <template v-if="status == 1">
        <img src="../resource/images/common/KXCG.png" class="note-img"/>
        <div class="main-notes">{{gridName}} 开柜成功</div>
        <div class="sub-notes">请尽快存件，存件后请记得关闭柜门</div>
      </template>

      <!--开箱失败-->
      <template v-if="status == 2">
        <img src="../resource/images/common/KXSB.png" class="note-img" style="margin-bottom: .2rem"/>
        <div class="sub-notes">{{statusMsg}}</div>
        <div class="notes-btns flex-box">
          <div class="btn-wrap btn-min" @click="changeGrid">
            <div class="btn">换柜</div>
          </div>
        </div>
      </template>
    </div>


    <!--关柜回调-->
    <div class="status-box dc-box" v-if="closeStatus != 0">
      <!--关柜成功-->
      <template v-if="closeStatus == 1">
        <img src="../resource/images/common/suc_icon.png" class="note-img"/>
        <div class="main-notes">关柜成功</div>
        <div class="notes-btns flex-box">
          <div class="btn-wrap btn-min" @click="confirmStore">
            <div class="btn">确定存件</div>
          </div>
          <div class="btn-wrap btn-min" @click="cancelStore">
            <div class="btn">取消存件</div>
          </div>
        </div>
      </template>
      <!--关柜失败-->
      <template v-if="closeStatus == 2">
        <img src="../resource/images/common/fail_icon.png" class="note-img"/>
        <span class="sub-notes">存件超时请点击按钮手动完成关柜<br/>如果无法关闭请联系客服</span>
        <div class="notes-btns flex-box">
          <div class="btn-wrap btn-min" @click="completeCloseGuid">
            <div class="btn">完成关柜</div>
          </div>
        </div>
      </template>
      <!--手动完成关柜失败-->
      <template v-if="closeStatus == 3">
        <img src="../resource/images/common/fail_icon.png" class="note-img"/>
        <div class="main-notes" style="color: #FB4848">关柜失败，请联系客服{{serviceTel}}</div>
        <div class="notes-btns flex-box">
          <div class="btn-wrap btn-min">
            <div class="btn" @click="call">联系客服</div>
          </div>
        </div>
      </template>
    </div>


    <!--确定存件回调-->
    <div class="status-box dc-box" v-if="storeStatus != 0">
      <!--成功-->
      <template v-if="storeStatus == 1">
        <img src="../resource/images/common/suc_icon.png" class="note-img"/>
        <div class="main-notes">{{storeHandleType?'存件':'取消'}}成功</div>
        <template v-if="storeHandleType">
          <div class="sub-notes">扣存件费用，通知收件人来网点取件，完成存件操作。</div>
        </template>
        <template v-else>
          不扣存件费用，会重新打开柜门，如果有存件请尽快取走并关闭柜门。
        </template>
        <div class="notes-btns flex-box">
          <div class="btn-wrap btn-min" @click="continueStore">
            <div class="btn">继续存件</div>
          </div>
        </div>
      </template>
      <!--失败-->
      <template v-if="storeStatus == 2">
        <img src="../resource/images/common/fail_icon.png" class="note-img"/>
        <div class="main-notes" style="color: #FB4848">{{storeHandleType?'存件':'取消'}}失败，请联系客服{{serviceTel}}</div>
        <div class="sub-notes">因为系统故障导致操作失败，请尽快联系客服完成相关的操作。</div>
        <div class="notes-btns flex-box">
          <div class="btn-wrap btn-min">
            <div class="btn" @click="call">联系客服</div>
          </div>
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
        orderId: '',
        status: 1,             // 开柜状态 1 -> 成功 2 -> 失败
        closeStatus: 0,        // 关柜状态 1 -> 成功 2 -> 失败 3 -> 手动关柜失败
        storeStatus: 0,        // 确定&取消存件回调
        gridName: 'A101',      // 开柜柜名
        statusMsg: '',         // 开柜失败提示信息
        serviceTel: '',        // 客服电话
        storeHandleType: true, // true -> 确定 false -> 取消
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

  .status-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFF;
    z-index: 500;
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
  .dc-box .note-img{
    width: 180/200rem;
    height: 180/200rem;
    margin-bottom: 40/200rem;
  }

  .status-box{
    padding-top: 10%;
  }

  .sub-notes{
    color: #A6A6A6;
    padding: 0 10%;
  }
</style>
