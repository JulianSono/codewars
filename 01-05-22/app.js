/*
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

*/


function howManyGifts(maxBudget, gifts){
  
  // holds numbers <=20 that have been added
var sum =0

//creates a list that holds return values

var budget =[]

//filters out all elements <=maxBudget

var newBadget = gifts.filter(e=> e <maxBudget ).sort((a,b)=> a-b)

for (i =0; i< newBadget.length; i++){
  // checks if current index is less than maxBudget and adds it to sum var
  if((sum +=newBadget[i]) <=maxBudget ){
    
    //push current index value to budget
    budget.push(newBadget[i])
  }
}

  return budget.length
}
