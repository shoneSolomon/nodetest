var  buf=new Buffer(26);
 for(i=0;i<26;i++)
 {
 	buf[i]=i+97;
 }

 console.log(buf.toString("utf8",0,6));

//转换城json格式
 var xx=new Buffer("123456");
var json=xx.toJSON();
console.log(json);


var yy=new Buffer("1234");
//合并缓冲
var  zz=Buffer.concat([xx,yy]);
console.log("all the merge:"+zz.toString());

//比较缓冲
var compare=xx.compare(yy);

if(compare<0)
{
	console.log(xx +"在"+yy+"之前");
}
else if(compare==0)
{
	console.log(xx +"与"+yy+"相同");
}
else{
	console.log(xx +"在"+yy+"之后");
}


var buf1=Buffer(20);

var buf2=Buffer("ada to work");
//buf2 copy to buf1
buf2.copy(buf1);

console.log(buf1.toString());

//新建一个字符串来切割
var buf3=buf2.slice(0,5);
console.log(buf3.toString());
console.log(buf3.length);

