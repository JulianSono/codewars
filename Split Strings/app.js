/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

  function solution(str){
      let res=[]


      return   str.split("").map((e,i,arr)=> i % 2===1 ? e+"-": e).join("").split("-").map(e=> e.length == 1 ? e+"_" : e).filter(e=> e !="")
  }
