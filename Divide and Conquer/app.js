/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.




*/

function divCon(x){

    // filter all strings, use reduce to add all instances,parse all values as numbers
    let strings= x.filter(e=> typeof e ==="string").reduce((a,b)=>{return parseInt(a) + parseInt(b)},0)


    //filter all items type of number, use reduce to add all ints
    let nums = x.filter(e=> typeof e !="string").reduce((a,b)=> {return a+b},0)
    

    return  nums -strings
}

divCon([9, 3, '7', '3'])
