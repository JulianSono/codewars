/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/
var uniqueInOrder=function(array){

  //create an array regaless of objec t type
  
let res = Array.from(array)


//iterate res, check if current item is === next item, if so, return a placeholder "-" else item. Filter "-" from result

return     res.map((item,index,arr)=> arr[index] === arr[index+1] ?  "-":item).filter(item=> item != "-")

}
