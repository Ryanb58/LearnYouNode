var fs = require('fs');
var path = require('path');

var directoryName = process.argv[2];
var extType = process.argv[3];


//Get list of files.
fs.readdir(directoryName, function (err, files){

    //Filter based on extension.
    var i;
    for(i in files)
    {
        //console.log(file);
        var ext = '.' + extType;
        if (path.extname(files[i]) === ext)
        {
            //Print files one per line.
            console.log(files[i]);
        }
    }
});
