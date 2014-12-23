var fs = require('fs');

//Grab File Path
var filePath = process.argv[2];

//Get buffer from file.
var buffer = fs.readFileSync(filePath);

//Get buffer string.
var bufferStr = buffer.toString();

//Get an array of new line's from the buffer string.
var newLines = bufferStr.split('\n');

//Write the number of new lines down.
console.log(newLines.length - 1);
