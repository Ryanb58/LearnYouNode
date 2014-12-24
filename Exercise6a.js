var mymodule = require('./Exercise6b.js');

var directoryName = process.argv[2];
var extType = process.argv[3];

function printList(err, list){
    if (err)
    {
        console.error(err);
    }

    list.forEach(function(fileName){
        console.log(fileName);
    });
}

//Call the main function:
mymodule(directoryName, extType, printList);
