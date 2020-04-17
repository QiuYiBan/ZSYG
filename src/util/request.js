const util = require('./util');
const api = require('./api');
import axios from 'axios';
import QS from 'qs';


const rq = function (url, options = '') {
    return new Promise((resolve, reject) => {
      axios.post(url, QS.stringify(options)).then(res => {
        if(res.data.code == -1) {
          console.log('后端代码 报错：-1');
          return util.showToast('网络延时，请稍后再试', 'none');
        } else if(res.data.code == -101 || res.data.code == -102) {
          //  若token失效, 重新调用登陆接口获取最新的token
          api.Login().then(data => {
            rq(url, options).then(res => {
              resolve(res)
            })
          })
        } else {
          resolve(res)
        }
      }).catch(errors => {
        reject(errors)
      });
    })
};

module.exports = {
    rq
};
