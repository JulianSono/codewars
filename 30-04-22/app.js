/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

var capitals = function (word) {

	//Create empty array to hold new values
	var b =[]


	// loop through "word" and find Capitals and index. Push it to a

	for (let i = 0; i < word.length; i++) {
	 if(word[i].toUpperCase() == word[i]){

		 b.push(i)
	 }
		
	}

	return b

};

capitals("HeLloThere")
