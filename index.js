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
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;
  console.log("root++++", root, self);




  var runInContent = (function runInContent(context) {
    console.log(context, 'context')
    // function utils() {

    // }
    let utils = {}
    function arraySet(array, key) {
      if(!Array.isArray(array)) {
        return []
      }
      const hash = {};
      const newarr = array.reduce((preVal, curVal) => {
        hash[curVal.key] ? '' : (hash[curVal.key] = true && preVal.push(curVal));
        return preVal;
      }, []);
      return newarr;
    }
    utils.arraySet = arraySet
    return utils
  })





  var x =   runInContent()
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
