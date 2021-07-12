var zhaodongwei = function (){
  //chunk
  function chunk(arr, size = 1){
    var result = []
    var tem = []
    var count = 0
    for(var i = 0; i <arr.length; i++){
      tem.push(arr[i])
      count++
      if(count == size){
        result.push(tem)
        count = 0
        tem = []
      }
    }
    if(tem.length > 0){
      result.push(tem)
    }
    return reuslt
  }
  //compact
  function compact(arr){
    return arr.filter(it => !!it === true)
  }
  //uniq
  function uniq (arr){
    var result = []
    arr.forEach(it => {
      if(!result.includes(it)){
        result.push(it)
      }
    })
    return result
}
  //uniqBy
  function uniqBy(arr){

  }

  return {
    chunk:chunk,
    compact:compact,
    uniq:uniq,

  }
}()

