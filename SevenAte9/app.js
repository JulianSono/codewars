/*

Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

*/


function sevenAte9(str){

//convert string to array
    let res = str.split("")
    

    //Iterate through res 
    for (let i = 0; i < res.length; i++) {

        //find "9" pos

        if( res[i] ==="9" && res[i-1] ==="7" && res[i+1]==="7"){

            // remove "9" if between 7's
        res.splice(i,1)
        }
    
    }
    //conver res to string
return res.join("")


}



sevenAte9("7797282")
