/*

Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/

function dontGiveMeFive(start, end)
{
  
  //holds the new loop values

let count=[
    
]


//iterates from start to end  and finds all the values that do not contain 5
    for (let i = start; i <= end; i++) {
      
      //comverts i to string and looks for 5
        if(!i.toString().includes("5")){

            count.push(i)
        }
        
    }

  
  
    return count.length
}


dontGiveMeFive(2,19)
