## y-utils JS组件库
> 一款模块化、高性能js实用工具库
### Array  **大部分针对对象数组**
* arraySet  *对象数组*去重， 使用场景

```js
 x.arraySet(array, key)
```
```js
let arr = [{name:'1', age:1}, {name:'2', age:2},{name:'1', age:1}]
let newarr = x.arraySet(arr, name) 

```
* deepClone 只适用于数组/对象的深拷贝
```js
  x.deepClone(obj)
```
由于js的引用对象的特性，在赋值的时候指向的是同一个内存地址。**在计算机中，有两个概念 堆和栈 ， 栈是用来存放 基本数据类型 以及 引用类型的地址；**

* arraryObjRemove *数组对象选定特定删除*
```js
/*
 * array: 传入数组
 * key: 字段
 * value: 字段值
 * return 新数组
 */
x.arraryObjRemove(array, key, value)
```
* objincludes *对象数组是否包含某个字段*
```js
/*
 * array: 传入数组
 * key: 字段
 * value: 字段值
 * return 新数组或者underfined
 */
x.objincludes(array, key, value)
```

### Date方法
* addZeroPrefix *补0操作*小于10的数组进行补0
```js
 x.addZeroPrefix(number))
```

```js
let a = 1
let b = x.addZeroPrefix(a) 
b // 01
```
* formatDate *时间格式化*参数分别为date和fmt
```js
 /*
 * fmt: 'yyyy-MM-dd hh:mm:ss'
 * yyyy: 年
 * MM: 月
 * dd: 日
 * hh: 时
 * mm: 分
 * ss: 秒
 * qq: 极度
 * SS: 毫秒
 */
 x.formatDate(date, fmt)
 
```

```js
let now = x.formatDate(new Date, 'yyyy-MM-dd hh:mm:ss')
```
* getTimeformatter 传入秒数以mm:ss传出，*适用计时间功能*
```js
 x.getTimeformatter(time)
```

```js
let a = 0
let timer = setInterval(() => {
  a+=1;
}, 1000)
let fomater = x.getTimeformatter(a)
```
* isToday 判断是否是当天
```js
 x.isToday(date)
```
```js
let isnow = isToday(new Date())
```
