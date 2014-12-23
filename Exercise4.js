var fs = require('fs');

var filePath = process.argv[2];

fs.readFile(filePath, function (err, data) {
    if (err)
    {
        throw err;
    }


    //Get buffer string.
    var bufferStr = data.toString();

    //Get an array of new line's from the buffer string.
    var newLines = bufferStr.split('\n');

    //Write the number of new lines down.
    console.log(newLines.length - 1);
});
