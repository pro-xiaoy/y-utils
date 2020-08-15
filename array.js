/**
 * 对象数组去重
 * @export
 * @param {*} array 对象数组
 * @param {boolean} key 所取字段
 * @returns
 */
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
/**
 * 深拷贝
 * @param {*} obj 
 */
function deepClone(obj) {
  
}