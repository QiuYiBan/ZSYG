const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
};


/*second_time 为秒数*/
const timeFilter = function(second_time) {
    let time = parseInt(second_time) + "秒";
    if( parseInt(second_time )> 60){

        let second = parseInt(second_time) % 60;
        let min = parseInt(second_time / 60);
        time = min + "分";

        if( min > 60 ){
            min = parseInt(second_time / 60) % 60;
            let hour = parseInt( parseInt(second_time / 60) /60 );
            time = hour + "小时" + min + "分";

            if( hour > 24 ){
                hour = parseInt( parseInt(second_time / 60) /60 ) % 24;
                let day = parseInt( parseInt( parseInt(second_time / 60) /60 ) / 24 );
                time = day + "天" + hour + "小时" + min + "分";
            }
        }
    }

    return time;
};

/*获取地址的参数*/
const GetQRCodeParams = function(str, paraName) {
    let arrObj = str.split("?" + paraName + '=');

    if (arrObj.length > 1) {
        let arrPara = arrObj[1].split("&");
        let paraStr = arrPara[0].toString(), cbData = {};
        if (paraStr.includes('#')) {
            let paraStrArr = paraStr.split('#');
            cbData.id = paraStrArr[0];
            cbData.code = paraStrArr[1];
        } else {
            cbData[paraName] = arrPara[0];
        }
        return cbData
    }
    else {
        return "";
    }
};






module.exports = {
    formatTime: formatTime,
    timeFilter: timeFilter,
    GetQRCodeParams: GetQRCodeParams,
};
