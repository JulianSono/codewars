/*
Task:This kata requires you to write an object that receives a file path and does operations on it. NOTE FOR PYTHON USERS: You cannot use modules os.path, glob, and reThe purpose of this kata is to use string parsing, so you're not supposed to import external libraries. I could only enforce this in python.Testing:
Python:

JavaScript:
const fm = new FileMaster('/Users/person1/Pictures/house.png');
fm.extension(); // output: 'png'
fm.filename(); // output: 'house'
fm.dirpath(); // output: '/Users/person1/Pictures/' 


Notes:
I have other kata that need to be tested. You may find them here and here
Please post any questions or suggestion in the discourse section. Thank you!
Thank to all users who contributed to this kata! I appreciate your input!

*/

let res =[]

class FileMaster {
  constructor(filepath) {
    this.filepath = filepath
       res = this.filepath.split("/")
    
  }
  
  extension() {
    return  res[res.length -1].split(".")[1]
  }
  
  filename() {
    return res[res.length -1].split(".")[0]
  }
  
  dirpath() {
    return res.slice(0,-1).join("/")+"/"
  }
}
