/*

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
FUNDAMENTALSSTRINGS
*/

function cleanString(s) {
  
  // empty array to hold new values
  let res  =[]
  
  
  //iterate over s, if # found pop/remove current index, else push element to res
  for (const i of s){
    
    if(i==="#"){
      
      res.pop()
    }else{
      
      res.push(i)
    }
  }
  
  //conver it back to a string
  
  return res.join("")
}
