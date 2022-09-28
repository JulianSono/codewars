/*

Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false

*/


function validPhoneNumber(phoneNumber){
    let tel =phoneNumber

    
    for (let i = 0; i < tel.length; i++) {

       if(tel[0] === "(" && tel[4] ===")" && tel[5]===" " && tel[9] ==="-" && tel.length == 14){

           return true
       }
        
    }

    return false
}
validPhoneNumber("(123) 456-7890")
