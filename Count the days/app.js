/*

Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days"

PS: This is my first kata. I hope you have fun^^

This kata is part of the Collection "Date fundamentals":
*/




function countDays(d){

    let today = new Date()
    let newdate = d - today
    let difference = Math.round(newdate /(1000 * 3600 * 24)) 

    
if(difference >= 1 ){

    return  `${difference} days`
}else if(difference ==0 ){

    return "Today is the day!"
}

       return "The day is in the past!"

}

countDays(new Date("December 31, 2511"))
