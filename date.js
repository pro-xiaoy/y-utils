// 日期格式基本都是加 0
function addZeroPrefix(number) {
  return number < 10 ? `0${number}`:number
}
/**
 * 传入日期转为正常的输出格式化日期
 * @param {*} date 日期new Date
 * @param {*} fmt  格式: yyyy-MM-dd
 */
function formatDate(date, fmt) { //author: meizz 
  var o = {
      "M+": date + 1, //月份 
      "d+": date.getDate(), //日 
      "h+": date.getHours(), //小时 
      "m+": date.getMinutes(), //分 
      "s+": date.getSeconds(), //秒 
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
      "S": date.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

/**
 * 返回时mm:ss
 * @export
 * @param {*} time
 * @param {boolean} [withSecond=false]
 * @returns
 */
function getTimeformatter(time) {
  if(time < 60) {
    return `00:${addZeroPrefix(time)}`
  } else {
    return `${addZeroPrefix(parseInt(time / 60))}:${addZeroPrefix(parseInt(time % 60))}`
  }
}

/**
 * 返回年月日
 * @export
 * @param {Date} date
 * @param {string} [splitor='-']
 * @returns
 */
function getDate(date, splitor = '-') {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}${splitor}${addZeroPrefix(month)}${splitor}${addZeroPrefix(day)}`
}
/**
 * 返回时分秒/时分
 * @export
 * @param {*} date
 * @param {boolean} [withSecond=false]
 * @returns
 */
function getTime(date, withSecond = false) {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return withSecond ? `${addZeroPrefix(hour)}:${addZeroPrefix(minute)}:${addZeroPrefix(second)}` : `${hour}:${addZeroPrefix(minute)}`
}

function getFullDate(date) {
  return `${getDate(date)} ${getTime(date)}`
}

function isToday(date) {
  return date.toDateString() === new Date().toDateString()
}

