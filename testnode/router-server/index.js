var server=require("./server");
var router=require("./router");

//路由函数注入到服务器中
server.start(router.route);