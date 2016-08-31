var fs=require("fs");

// var data=fs.readFileSync("input.txt");
// console.log(data.toString());

fs.readFile('input.txt',function(err,data){
	if(err)
		return console.error(err);
	else 
		return console.log(data.toString());

});

console.log("pragram is over");