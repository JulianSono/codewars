/*
An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.
*/

function zeroPlentiful(arr){
 let count =[]

//pushes 0 to count or "-" it help us determine groups of 0's
arr.map(e=> e == 0 ? count.push(e) :count.push("-"))


    //join count to string, splits it using seprator "-" filters each element that has " " returns the length of each item
    let res = count.join("").split("-").filter(e=> e != "").map(e=> e.length)

//check if every item is more than 4 if not returl false else return length of res
    return  res.every(e=> e>=4 ) == false ? 0 : res.length
}


zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0], 2);

