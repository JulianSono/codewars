/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/

function dup(s) {

    let a = s.map(e=> e.split("").map((e,i,arr)=> e ===arr[i+1] ? e.slice(i,1) : e).join(""))
    
return a.map(e=> e[0] === e[1]? e.slice(1) : e)
};

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])
