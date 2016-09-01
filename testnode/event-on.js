

var events=require('events');
var ee=new events.EventEmitter();


ee.on('hello',function(a1,a2){
	console.log('listen1',a1,a2);
});

ee.on('hello',function(a1,a2){
	console.log('listen2',a1,a2);

});

ee.emit('hello','hello1','hello2');

var listen1=function(){
	console.log("listen1 go!");
}

var listen2=function(){
	console.log("listen2 go!");
}

ee.addListener('conn',listen1);
ee.addListener('conn',listen2);
ee.emit('conn');

var num=events.EventEmitter.listenerCount(ee,'conn');
console.log(num);



ee.removeListener('conn',listen1);
console.log("listen1 over");
ee.emit('conn');
var num1=events.EventEmitter.listenerCount(ee,'conn');
console.log(num1);



console.log("all is over");