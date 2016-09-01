var fs=require("fs");
var zlib=require("zlib");


fs.createReadStream("intput.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("intput.txt"));
console.log("gunzip is over");