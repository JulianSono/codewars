/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

*/


function flattenAndSort(array) {
  // Good luck, brave code warrior!

  //hold new array values
    let res = []

    //iterate over outer array
 for (let i = 0; i < array.length; i++) {

   //iterate over inner array
     for (let j = 0; j < array[i].length; j++) {

       //push results to res
         res.push(array[i][j])
         
     }
     
 }
  //sort new array in accending order
  return res.sort((a,b)=> a-b)
}


flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])
