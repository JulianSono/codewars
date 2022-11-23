/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

*/

String.prototype.camelCase=function(s){

let res = this.trim()

if ( res.length == 0){

  return ""
}else{
    return res.split(" ").map(e=> e[0].toUpperCase() + e.slice(1)).join("")
}

}

 
