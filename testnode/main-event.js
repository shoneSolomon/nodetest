var events=require("events");

var ee=new events.EventEmitter();


ee.on('data-received',function(){
	console.log("数据接收成功");
});


var connectHandler=function(){
	console.log("连接成功");
	ee.emit('data-received');

}

ee.on('connection',connectHandler);
ee.emit('connection');


console.log("程序执行完毕");