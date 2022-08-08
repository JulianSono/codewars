/*

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice


*/


function duplicateCount(text){

    //hold duplicate values
    let a = []


    //create array from text, pass values as lowercase and sort new values
   let res = text.toLowerCase().split("").sort()



    //iterate over res and find if current value and == next value. if so add value to a
  for (let i = 0; i < res.length; i++) {

     if(res[i] ===res[i+1]){

         a.push(res[i])
     }
      
  }


  //Give us unique values from a and check the length the returned values

    return [...new Set(a)].length
}

duplicateCount("aabBcde")
