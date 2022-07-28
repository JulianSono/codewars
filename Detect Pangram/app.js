/*

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/


function isPangram(char){


    //create new unique set. set to lower case, use regex to indefity alphabet letter. check size 

return new Set(char.toLowerCase().replace(/[^a-z]/g,"") ).size === 26
    
}


isPangram("Cwmfjordbankglyphsvextquiz")