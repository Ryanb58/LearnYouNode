var fs = require('fs');
var path = require('path');

module.exports = function(dir, extType, callback)
{
    //Get a list of file names in the directory.
    fs.readdir(dir, function (err, files){

        if (err)
        {
            return callback(err, null);
        }

        var fileNames = new Array();

        //Filter based on extension.
        var i;
        for(i in files)
        {
            var ext = '.' + extType;
            if (path.extname(files[i]) === ext)
            {
                //Add filename to the list of fileNames.
                fileNames.push(files[i]);
            }
        }

        //Finish up by calling the final function to process the results.
        callback(null, fileNames);
    });
}
