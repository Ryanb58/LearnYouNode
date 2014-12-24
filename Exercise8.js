//Native Modules:
var http = require("http");

//Get URL from arguments.
var url = process.argv[2];

var content = "";
var counter = 0;

//Make the request.
http.get(url, function(response){

    //Set encoding to utf8 so buffer comes back as a string of sorts.
    response.setEncoding("utf8");

    //Print the response each time the data event occurs.
    response.on("data", function(data){
        //console.log(data);
        content += data;
        counter += data.length;
    });

    //Handle error's that occur.
    response.on("error", function(err){
        console.error(err);
    });

    response.on("end", function(){
        console.log(counter.toString());
        console.log(content);
    })

});
