// const root = 'http://xjx1.ngrok.fansiji.com';
// const root = 'https://xujinxin.utools.club';
const root = 'https://znkdg.fzrykj.com/courier';

module.exports = {
    //  登陆
    login: root + '/login',
    //  注册
    register: root + '/courier/register',
    //  获取验证码
    getSMS: root + '/courier/sms',
    //  重绑定手机号
    rebindPhone: root + '/courier/bindPhone',
    //  身份证上传
    uploadIDCard: root + '/courier/idUpload',
    //  用户信息
    personal: root + '/courier/personnel',
    //  投件统计
    depositStatistics: root + '/order/statistical',
    //  投件明细
    depositDetail: root + '/order/paginate',
    //  充值
    recharge: root + '/courier/recharge',
    //  充值记录
    rechargeRecord: root + '/courier/rechargeRecord',
    //  获取快递公司
    getExpressList: root + '/company/findCompany',
    //  取件列表
    pickupList: root + '/order/record',
    //  小区查询
    communityQuery: root + '/location/query',
    //  网点查询
    siteQuery: root + '/location/queryInfo',
    //  取件详情
    pickupDetail: root + '/order/info',
    //  取件
    openGrid: root + '/order/openArk',
    //  扫码获取网点信息
    scanCodeSiteInfo: root + '/location/info',
    //  存件
    deposit: root + '/location/storage',
    //  重发信息
    resendInfo: root + '/order/resendInfor',
    //  首页轮播
    carousel: root + '/advert/find',
    //  图片上传
    uploadPicture: root + '/courier/orc',
    //  查询柜子是否关闭
    checkIfClose: root + '/order/queryOrderStatus',
    //  确认存件
    confirmDeposit: root + '/order/orderFulfillment',
    //  取消存件
    cancelDeposit: root + '/order/orderCancel'
};