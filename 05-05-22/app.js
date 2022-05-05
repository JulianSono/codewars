/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"

*/

function spacify(str) {
    //split string into an array
    var a = str.split("")
   
    //Array to hold new values
    let b =[]
    
    //iterate over each element in a + add "space" between each item
    for (let i = 0; i < a.length; i++) {
      
      //push new vales to array
      b.push(a[i] +" ")
    
    }
  
  //join b into a string, trim() removes whitesapces at both ends
  return b.join("").trim()
}
