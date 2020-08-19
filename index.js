// /**
//   * @license
//   * Anchor: pro-xiaoy
//   * github: https://github.com/pro-xiaoy
//   * describe: 一些自身工作中总是会用到的方法
//   * key: x---打字比较方便的碰到
//  */
(function () {
  /** Detect free variable `global` from Node.js. */
  var freeGlobal =
    typeof global == "object" && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf =
    typeof self == "object" && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports =
    typeof exports == "object" && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule =
    freeExports &&
    typeof module == "object" &&
    module &&
    !module.nodeType &&
    module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  var runInContent = function runInContent(context) {
    let utils = {};
    function arraySet(array, key) {
      if (!Array.isArray(array)) {
        return [];
      }
      const hash = {};
      const newarr = array.reduce((preVal, curVal) => {
        hash[curVal[key]]
          ? ""
          : (hash[curVal[key]] = true && preVal.push(curVal));
        return preVal;
      }, []);
      return newarr;
    }

    function arraryRemove(array, key) {
      if (!array.includes(key)) {
        return array;
      }
      let index = array.indexOf(key);
      array.splice(index, 1);
      return array;
    }

    function arraryObjRemove(array, key, val) {
      if (!Array.isArray(array)) {
        return [];
      }
      const newarr = array.reduce((preVal, curVal) => {
        curVal[key] === val ? "" : preVal.push(curVal);
        return preVal;
      }, []);
      return newarr;
    }

    function objincludes(array, key, value) {
      if (!Array.isArray(array)) {
        return [];
      }
      return array.find(item=> item[key] === value)
    }


    function addZeroPrefix(number) {
      return number < 10 ? `0${number}` : number;
    }
    /**
     * 传入日期转为正常的输出格式化日期
     * @param {*} date 日期new Date
     * @param {*} fmt  格式: yyyy-MM-dd
     */
    function formatDate(date, fmt) {
      //author: meizz
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
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
      if (time < 60) {
        return `00:${addZeroPrefix(time)}`;
      } else {
        return `${addZeroPrefix(parseInt(time / 60))}:${addZeroPrefix(
          parseInt(time % 60)
        )}`;
      }
    }

    /**
     * 返回年月日
     * @export
     * @param {Date} date
     * @param {string} [splitor='-']
     * @returns
     */
    function getDate(date, splitor = "-") {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}${splitor}${addZeroPrefix(month)}${splitor}${addZeroPrefix(
        day
      )}`;
    }
    /**
     * 返回时分秒/时分
     * @export
     * @param {*} date
     * @param {boolean} [withSecond=false]
     * @returns
     */
    function getTime(date, withSecond = false) {
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      return withSecond
        ? `${addZeroPrefix(hour)}:${addZeroPrefix(minute)}:${addZeroPrefix(
            second
          )}`
        : `${hour}:${addZeroPrefix(minute)}`;
    }

    function getFullDate(date) {
      return `${getDate(date)} ${getTime(date)}`;
    }

    function isToday(date) {
      return date.toDateString() === new Date().toDateString();
    }

    utils.arraySet = arraySet;
    utils.addZeroPrefix = addZeroPrefix;
    utils.formatDate = formatDate;
    utils.getDate = getDate;
    utils.getTime = getTime;
    utils.isToday = isToday;
    utils.getTimeformatter = getTimeformatter;
    utils.arraryRemove = arraryRemove;
    utils.arraryObjRemove = arraryObjRemove;
    utils.objincludes = objincludes
    return utils;
  };

  var x = runInContent();
  if (
    typeof define == "function" &&
    typeof define.amd == "object" &&
    define.amd
  ) {
    root.x = x;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define(function () {
      return x;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = x).x = x;
    // Export for CommonJS support.
    freeExports.x = x;
  } else {
    // Export to the global object.
    root.x = x;
  }
}.call(this));
