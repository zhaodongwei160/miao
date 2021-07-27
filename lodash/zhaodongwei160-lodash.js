var zhaodongwei160 = function () {
  function property(prop){  //字符串
    return function(obj){
      return obj[prop]//把属性值当作属性名传回给函数  
    }
  }
  //mactches
  function matches(src){  //对象
    return function (obj) {
      for(var key in src){
        if(obj[key] !== src[key]){
          return false
        }
      }
      return true
    }
  }
  function matchesProperty(arr){  //数组
    var key = arr[0]
    var val = arr[1]
    return function(obj){
      return obj[key] == val
    }
  }
  function iteratee(maybeiteratee){
    if(typeof maybeiteratee == "function"){
      return maybeiteratee
    }
    if(typeof predicate == "string"){
      predicate = property(predicate)  //push.arr[i][predicate]
    }
    if(Array.isArray(predicate)){
      predicate = matchesProperty(...predicate)
    }
    if(typeof predicate == "object"){
      predicate = matches(...predicate)
    }
  }
  function isMatches(obj, source){
    return function(source){
      for(var key in source){
        if(typeof source !== "object"){
          if(obj[key] !== source[key]){
            return false
          }
        }else{
          if(isMatches(obj[key],source[key])){
            return false
          }
        }
      }
      return true
    }
  }
  
  function get (obj, path,defaulVal){ //获取某个对象深层次的值
    for(var k of path){
      if(obj == undefined){
        return defaulVal
      }else{
        obj = path[k]
      }
    }
    return obj
  }
  function bind (f, thisArg, ...fixedArgs){
    return function(...args){

    }
  }
  bind.placeholder = window

  function sumBy(arr,predicate){
    predicate = iteratee(predicate)
    let sum = 0
    for(var key of arr){
      sum += predicate(arr[key])
    }
    return sum
  }
  function identify(val){  //一个用于返回自己的函数
    return val
  }
  function sum (arr){
    return sumBy(arr, it => it)
  }
  //chunk
  function chunk(arr, size = 1) {
    var result = []
    var tem = []
    var count = 0
    for (var i = 0; i < arr.length; i++) {
      tem.push(arr[i])
      count++
      if (count == size) {
        result.push(tem)
        count = 0
        tem = []
      }
    }
    if (tem.length > 0) {
      result.push(tem)
    }
    return result
  }
  //compact
  function compact(arr) {
    return arr.filter(it => !!it === true)
  }
  //uniq
  function uniq(arr) {
    var result = []
    arr.forEach(it => {
      if (!result.includes(it)) {
        result.push(it)
      }
    })
    return result
  }
  //uniqBy
  function uniqBy(arr,predicate) {  
  }
  //flatten
  function flatten(arr) {
    return [].concat(...arr)
  }
  //flattenDeep
  function flattenDeep(arr) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result.push(...flattenDeep(arr[i]))
      } else {
        result.push(arr[i])
      }
    }
    return result
  }
  //flattenDepth
  function flattenDepth(arr, depth = 1) {
    let result = []
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        result.push(...flattenDepth(arr[i], depth - 1))
      } else {
        result.push(arr[i])
      }
    }
    return result
  }
  //groupBy
  function groupBy(collection, iteratees) {
    var iteratees = iteratee(iteratees)
  }
  //forEach
  function forEach(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        predicate(collection[i], i, collection)
      }
    }
    if (typeof collection == 'object') {
      for (let k in collection) {
        predicate(collection[k], k, collection);
      }
    }
    return collection;
  }
  //map
  function map(collection, predicate) {  //如果传入的是字符串，数组，对象， 考虑转入数组的类型
    
    if(typeof predicate == "string"){
      predicate = property(predicate)  //push.arr[i][predicate]
    }
    if(Array.isArray(predicate)){
      predicate = matchesProperty(...predicate)
    }
    if(typeof predicate == "object"){
      predicate = matches(...predicate)
    }
      let result = [];

      for(var key in collection){
        result.push(predicate(collection[i],i,collection))
      }
      return result
    
  }
  //filter
  function filter(collection,predicate) {
     
    if(typeof predicate == "string"){
      predicate = property(predicate)  //push.arr[i][predicate]
    }
    if(Array.isArray(predicate)){
      predicate = matchesProperty(...predicate)
    }
    if(typeof predicate == "object"){
      predicate = matches(...predicate)
    }
    let result = []
    for(let key in collection){
      if(predicate(collection[i],i,collection) === true) {
        result.push(collection[i])
      }
    }
    return result
  }
  //keys
  function keys(arr) {
    let result = []
    for (let k in arr) {
      result.push(k)
    }
    return result
  }
  //values
  function values(arr) {
    let result = []
    for (let k in arr) {
      result.push(arr[k])
    }
    return result
  }
  //sortBy
  function sortBy(arr) {

  }
  //isEqual
  function isEqual(a,b){
    if(a === b){
      return true
    }
    let typea = typeof a
    let typeb = typeof b
    if(typea === typeb){
      if(typea == "object"){
        for(var k in a){
          if(!isEqual(a[k],b[k])){
            return false
          }
        }
        for(var k in b){
          if(!isEqual(a[k],b[k])){
            return false
          }
        }
        return true
      }
      return a === b
    }
  }
  //concat
  function concat(arr,value){
    let result = []
    for(let i = 0; i < arguments.length; i++){
      if(Array.isArray(arguments[i])){
        result.push(...arguments[i])
      }else{
        result.push(arguments[i])
      }
    }
    return result
  }
  //diffrence
  function diffrence(arr,value){
    let result = []
    let temp = [].concat(...value)

   for(let i = 0; i <arr.length; i++){
     if(!temp.includes(arr[i])){
       result.push(arr[i])
     }
   }
   return result
  }

  //drop
  function drop(arr, n = 1){
    while(n){
      arr.shift()
      n--
    }
    return arr
  }
  //dropRight 
  function dropRight(arr, n = 1){
    while(n){
      arr.pop()
      n--
    }
    return arr
  }
  //fill
  function fill(arr,value,start = 0,end = arr.length){
    for(let i = start; i < end; i ++){
      arr[i] = value
    }
    return arr
  }
  //fillIndex
  function fillIndex(arr,predicate,fromIndex = 0){
    let it = iteratee(predicate)
    for(let i = fromIndex; i < arr.length; i++){
      if(it(arr[i])){
        return i
      }
    }
    return -1
  }
  //head
  function head(arr){
    if(arr.length > 0){
      return arr[0]
    }
    return []
  }
  //indexOf
  function indexOf(arr,value,start = 0) {
    if(start >= 0){
      for(let i = start; i < arr.length; i++){
        if(arr[i] == value){
          return i
        }
      }
    }
    if(start < 0){
      for(let i = arr.length; i > start; i--){
        if(arr[i] == value){
          return i
        }
      }
    }
    return -1
  }
  //initial
  function initial(arr){
    arr.splice(-1)
    return arr
  }
  //intersection
  function intersection(arr){
    for (var k in arr){
      
    }
  }
  //join
  function join(arr, separator = ','){
    let str = ''
    for(let item of arr){
      str += '' + item + separator
    }
    return str.slice(0,-1)
  }
  //last
  function last(arr){
    return arr[arr.length - 1]
  }
  //lastIndexOf
  function lastIndexOf(arr,value,number = arr.length){
    for(var i = number; i >= 0; i--){
      if(arr[i] == value){
        return i
      }
    }
    return -1
  }
  //nth
  function nth(arr, get = 0){
    if(get >= 0){
      return arr[get]
    }else{
      return arr[arr.length + get]
    }
  }
  //pull
  function pull(arr,...args){
    let result = []
    for(let key of arr){
      if(!args.includes(key)){
        result.push(key)
      }
    }
    return result
  }
  //reverse
  function reverse(arr){
    let i = 0
    let j = arr.length -1
    for(i; i < j;i++){
      let t = arr[i]
      arr[i] = arr[j]
      arr[j] = t 
      j--
    }
    return arr
  }
  //sortedIndex
  function sortedIndex(arr,value){
    arr.push(value)
    arr.sort()
    return arr
  }




  return {
    chunk: chunk,
    compact: compact,
    uniq: uniq,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    forEach: forEach,
    filter: filter,
    map: map,
    keys: keys,
    values: values,
    isEqual:isEqual,
    concat:concat,
    diffrence:diffrence,
    drop:drop,
    dropRight:dropRight,
    fill:fill,
    fillIndex:fillIndex,
    head:head,
    indexOf:indexOf,
    initial:initial,
    join:join,
    last:last,
    lastIndexOf:lastIndexOf,
    nth:nth,
    pull:pull,
    reverse:reverse,
    sortedIndex:sortedIndex,
  }
}()

