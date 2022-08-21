/*
Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

*/

function changer(str) {

    
    let letters = ["a", "e", "i", "o", "u"]
    let res1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let a = str.toLowerCase().split("")
    let b = []

    for (let i = 0; i < a.length; i++) {

        if (res1.includes(a[i])) {
            let index = res1.indexOf(a[i])
            b.push(res1[index + 1])
        } else {
            b.push(a[i])
        }

    }


    return b.map(e => typeof e == "undefined" ? e = "a" : e).map(e => letters.includes(e) ? e.toUpperCase() : e.toLowerCase()).join("")

}

changer('zello World')
