//Native Modules:
var http = require("http");

//Get URL from arguments.
var url = process.argv[2];

//Make the request.
http.get(url, function(response){

    //Set encoding to utf8 so buffer comes back as a string of sorts.
    response.setEncoding("utf8");

    //Print the response each time the data event occurs.
    response.on("data", function(data){
        console.log(data);
    });

    //Handle error's that occur.
    response.on("error", function(err){
        console.error(err);
    });

});
