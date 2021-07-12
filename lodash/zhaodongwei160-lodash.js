var zhaodongwei160 = function () {
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
    return reuslt
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
  function uniqBy(arr) {  

  }
  //flat
  function flat(arr) {
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
  function groupBy(collection,iteratees){
    var iteratees = iteratee(iteratees)
  }
  //forEach
  function forEach(collection,predicate){
   if(Array.isArray(collection)){
     for(let i = 0; i < collection.length; i++){
      predicate(collection[i], i, collection)
     }
   }
   if(typeof collection == 'object'){
     for(let k in collection){
      predicate(collection[k], k, collection);
       }
     }
     return collection;
   }
   //map
   function map(arr,predicate){
     let result = [];
    if(Array.isArray(collection)){
      for(let i = 0; i < collection.length; i++){
        result.push(predicate(collection[i], i, collection));
      }
    }
    if(typeof collection == 'object'){
      for(let k in collection){
        result.push(predicate(collection[k], k, collection));
        }
      }
      return result;
    }
    //filter
    function filter(arr){
      let result = []
      if(Array.isArray(arr)){
        result.push(forEach(arr[i],i,arr))
      }
      if(typeof arr == "object"){
        for(let k in arr){
          result.push(arr[k],k,arr)
        }
      }
      return result
    }

  return {
    chunk: chunk,
    compact: compact,
    uniq: uniq,
    flat:flat,
    flattenDeep:flattenDeep,
    flattenDepth:flattenDepth,
    forEach:forEach,
    filter:filter,
    map:map,

  }
}()

