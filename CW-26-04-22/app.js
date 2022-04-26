/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0)

*/

function insertDash(num) {

    var newNum = num.toString().split("")
  
    for (let i = newNum.length; i >= 0; i--) {
      
        if (newNum[i] % 2 == 1 && newNum[i + 1] % 2 === 1) {
            newNum.splice(i + 1, 0, "-")
        }
    }

    return newNum.join("")

}


insertDash(227345657)
