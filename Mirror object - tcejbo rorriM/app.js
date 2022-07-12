/*
Mirror - Mirror
Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -
Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx
"You cannot change the original object, because if you did that the reflection would change."

*/



const mirror = obj => {
  
  // Stores new object from obj
  let newobj={}


// Iterate over obj to get keys and values
  for (let key in obj){


// add key to newobj and set value reverse string of itself.
    newobj[key] = key.split( "").reverse().join("")
  }

    return newobj
};

mirror(obj)
let obj ={

    abc: undefined,
    arara:undefined,
    xyz:undefined
}
