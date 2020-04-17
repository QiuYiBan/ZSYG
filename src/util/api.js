const RU = require('./interface');
const RQ = require('./request');

//  登陆
export function Login() {
    return new Promise((resolve, reject) => {
        wx.login({
            success: res => {
                let code = res.code;
                if (code) {
                    RQ.rq(RU.login, {code: code}).then(res => {
                        resolve(res);
                        wx.setStorageSync('token', res.data.token);
                        wx.setStorageSync('phone', res.data.phone);
                        wx.setStorageSync('ifReg', res.data.ifReg);
                    })
                }
            }
        })
    })
}

//  获取短信
export function GetSMS(options) {
    return new Promise((resolve, reject) => {
        wx.login({
            success: res => {
                let code = res.code;
                if (code) {
                    RQ.rq(RU.getSMS, options).then(res => {
                        resolve(res);
                    })
                }
            }
        })
    })
}

//  注册
export function Register(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.register, options).then(res => {
            resolve(res)
        })
    })
}

//  上传身份证
export function UploadIDCard(filePath) {
    return new Promise((resolve, reject) => {
        wx.uploadFile({
            url: RU.uploadIDCard,
            filePath: filePath,
            name: 'file',
            header: {'access_token': wx.getStorageSync('token')},
            success: res => resolve(res),
            fail: res => reject(res)
        })
    })
}

//  获取快递公司
export function GetExpressList() {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.getExpressList).then(res => {
            resolve(res)
        })
    })
}

//  用户信息
export function Personal() {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.personal).then(res => {
            resolve(res)
        })
    })
}

//  充值支付
export function Recharge(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.recharge, options).then(res => {
            resolve(res)
        })
    })
}

//  充值记录
export function RechargeRecord(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.rechargeRecord, options).then(res => {
            resolve(res)
        })
    })
}

//  重绑手机号
export function RebindPhone(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.rebindPhone, options).then(res => {
            resolve(res)
        })
    })
}

//  投件明细
export function DepositDetail(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.depositDetail, options).then(res => {
            resolve(res)
        })
    })
}

//  取件记录
export function PickupList(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.pickupList, options).then(res => {
            resolve(res)
        })
    })
}

//  小区查询
export function CommunityQuery(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.communityQuery, options).then(res => {
            resolve(res)
        })
    })
}

//  网点查询
export function SiteQuery(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.siteQuery, options).then(res => {
            resolve(res)
        })
    })
}

//  取件详情
export function PickupDetail(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.pickupDetail, options).then(res => {
            resolve(res)
        })
    })
}

//  取件
export function OpenGrid(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.openGrid, options).then(res => {
            resolve(res)
        })
    })
}

//  扫码获取网点信息
export function GetScanCodeSiteInfo(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.scanCodeSiteInfo, options).then(res => {
            resolve(res)
        })
    })
}

//  存件
export function Deposit(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.deposit, options).then(res => {
            resolve(res)
        })
    })
}

//  重发信息
export function ResendInfo(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.resendInfo, options).then(res => {
            resolve(res)
        })
    })
}

//  首页轮播
export function GetCarousel() {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.carousel).then(res => {
            resolve(res)
        })
    })
}

//  查询柜子是否关闭
export function CheckIfClose(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.checkIfClose, options).then(res => {
            resolve(res)
        }).catch(res => {
            reject(res)
        })
    })
}

//  确认存件
export function ConfirmDeposit(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.confirmDeposit, options).then(res => {
            resolve(res)
        })
    })
}

//  取消存件
export function CancelDeposit(options) {
    return new Promise((resolve, reject) => {
        RQ.rq(RU.cancelDeposit, options).then(res => {
            resolve(res)
        })
    })
}


