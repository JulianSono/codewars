/*

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)



*/


function sumOfMinimums(arr) {

  //store mun total
  let total= 0

  //iterate over arr, grab first element after sorting and add it to total
  for (let i = 0; i < arr.length; i++) {
total+=arr[i].sort((a,b)=>a-b)[0]
    
  }


  return total
}


sumOfMinimums( [[109, 31, 1, 5, 30, 108], [109, 72, 24, 28, 131, 140], [25, 31, 113, 70, 95, 105]])
