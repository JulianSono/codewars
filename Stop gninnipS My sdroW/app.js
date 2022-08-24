/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(string){
    //conver string to array, checks if length of each elment is >=5. If so, conver to array, reverse and join back to string. Then convert restul to array
  return string.split(" ").map(e=> e.length >= 5  ? e.split("").reverse().join("") : e).join(" ")
}
spinWords("Hey fellow warriors")
