/*

Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!

*/

fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast")


function fireFight(s){

  //splits s into an array, iterates over with map to replace "Fire" with "~~"
    let res = s.split(" ").map(e=> e.replace("Fire", "~~"))

    
    //join res back into an string
    return res.join(" ")
  
}


