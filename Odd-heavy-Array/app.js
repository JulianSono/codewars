/*

*/



function isOddHeavy(n) {
  //get odd and even numbers
    let odd = n.filter(e => e % 2 !== 0)
    let even = n.filter(e => e % 2 === 0)

  //check if odd has no odd numbers
    if (odd.length === 0) {
        return false
    }


  // We check if the first odd number is greater than all even ones, if not, we return false, if in the end it is greater, we check the next odd number.
    for (let i = 0; i < odd.length; i++) {
        for (let j = 0; j < even.length; j++) {
            if (odd[i] < even[j]) {
                return false
            }
        }
    }
    // Return true if ultimately the unaccounted numbers are greater than all the counted ones.
    return true
}


isOddHeavy([1, 2, 6, 3, 2, 5, , 4, 5, 80, 80, 80])
