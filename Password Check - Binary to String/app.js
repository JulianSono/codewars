/*
Password Check - Binary to String
A wealthy client has forgotten the password to his business website, but he has a list of possible passwords. His previous developer has left a file on the server with the name password.txt. You open the file and realize it's in binary format.

Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. If the password is found, return the password string, else return false;

decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => 'password123'
decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false
decodePass(['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false


*/
function decodePass( passArr, bin ){

  // explode bin to array, iterate with "map" to convert binary to decimasl with parseInt, Then we will also use the method String.fromCharCode() to convert from decimals to characters(text).
  let a = bin.split(" ").map(e=> String.fromCharCode(parseInt(e,2))).join("")


  //check if passArr includes a, return a or false
    return passArr.includes(a) ? a : false
}

decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011')
