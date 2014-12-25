//Native Modules:
var http = require("http");

//Get URL from arguments.
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var content = new Array();
content[0] = "";
content[1] = "";
content[2] = "";
var counter = 0;

//Make the request for URL 1.
http.get(url1, function(response){

    //Set encoding to utf8 so buffer comes back as a string of sorts.
    response.setEncoding("utf8");

    //Print the response each time the data event occurs.
    response.on("data", function(data){
        //console.log(data);
        content[0] = content[0].concat(data);
    });

    //Handle error's that occur.
    response.on("error", function(err){
        console.error(err);
    });

    response.on("end", function(){
        counter++;
        isDone();
    })
});

//Make the request for URL 2.
http.get(url2, function(response){

    //Set encoding to utf8 so buffer comes back as a string of sorts.
    response.setEncoding("utf8");

    //Print the response each time the data event occurs.
    response.on("data", function(data){
        //console.log(data);
        content[1] = content[1].concat(data);
    });

    //Handle error's that occur.
    response.on("error", function(err){
        console.error(err);
    });

    response.on("end", function(){
        counter++;
        isDone();
    })
});

//Make the request for URL 3.
http.get(url3, function(response){

    //Set encoding to utf8 so buffer comes back as a string of sorts.
    response.setEncoding("utf8");

    //Print the response each time the data event occurs.
    response.on("data", function(data){
        //console.log(data);
        content[2] = content[2].concat(data);
    });

    //Handle error's that occur.
    response.on("error", function(err){
        console.error(err);
    });

    response.on("end", function(){
        counter++;
        isDone();
    })
});

function isDone(){
    //check if the program is done...
    if(counter !== 3)
    {
        return false;
    }

    //if so then print the results line by line.
    content.forEach(function(item){
        console.log(item);
    })
}
