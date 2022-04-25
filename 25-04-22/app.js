function solution(str, ending){
  var a= ending.length
   var b = str.slice(-a)
  return b === ending || a === 0 ? true : false
 
}

solution('abc', 'bc') 
