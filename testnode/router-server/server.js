var http=require("http");
var url=require("url");


function start(route){
    function onRequest(request,response){
    	var pathname=url.parse(request.url).pathname;
    	console.log("request for pathname "+pathname+" is received.");

    	route(pathname);

    	response.writeHead(200,{"Content-Type":"text/plain"});
    	response.write("return to data:hello world");
    	response.end();

    }

//start 函数执行的是创建服务器
http.createServer(onRequest).listen(8000);
console.log("server has started");

}
exports.start=start;