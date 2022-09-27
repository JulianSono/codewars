/*
Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

E.g
string1 = "hello"
string2 = "aaahello"

// => 'a'
The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.
*/



let str1 =   "aabbcc"
let str2 = "aacccbbcc"

function addedChar(s1, s2){
 let string1  = [...s1].sort()
 let string2 = [...s2].sort()
 return string2.find((e, i) => e !== string1[i])
}


addedChar(str1, str2)
