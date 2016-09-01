var  fs=require("fs");

//创建可读流对象，创建可读流对象读取存储的数据对象，可读流对象设置读取格式，读取数据文本
var rs=fs.createReadStream("input.txt");
var data="";
rs.setEncoding("UTF8");

rs.on("data",function(chunk){
	data+=chunk;
});

rs.on("end",function(){
	console.log(data.toString());
});

rs.on("error",function(){
	console.log(error.stack);
});


console.log("program read over1");


//写入流,建立写入数据对象，建立写入流对象，写入流对象设置写入编码格式，写入,写入结束
var  data1="hello ,to  work,this is  write in file steram";

var ws=fs.createWriteStream("output.txt");

ws.write(data1,"UTF8");
ws.end();

ws.on("finish",function(){
	console.log("write  finish");

});

ws.on("error",function(error){
      console.log(error.stack);
});


console.log("program read over2");


//管道流
var rs1=fs.createReadStream("input.txt");
var ws1=fs.createWriteStream("output.txt");

rs1.pipe(ws1);


console.log("its pipe over");