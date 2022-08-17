/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/
function duplicateEncode(word){

    let res  = word.toLowerCase().split("")
    let b =word.split("")


    // /If they both are same, means the element occurs only once in the array but if they are different, it clearly means that the element occurs more than once as the same element can not have 2 different indexes.
    return res.map((e,i,arr)=> arr.indexOf(e) !== arr.lastIndexOf(e) ? ")" :"(").join("")

    
}

duplicateEncode("recede")