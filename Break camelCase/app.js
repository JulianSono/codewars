/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/


// complete the function
function solution(string) {


    //split string into array and store in res
    let res = string.split("") 

    //in s1 check if res has an uppercase value, give it a space for later indefication, else set value to current value
    let s1= res.map(e=> e.toUpperCase() ==e ? " "+e : e)


    //join s1 to string
    return s1.join("")

}
solution('camelCasingTest')
