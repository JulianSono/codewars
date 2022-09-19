/*

*/


function amountOfPages(summary){



    let a = Array(summary).fill(1).map((e, i) => e + i ).join("")

    let b =""
    let i =0
    let x =""
    



while(b.length <=summary){
    i++
    b += i

    if(b.length == summary){

        x = i
    }

    }


 
  

    return  x
}
