
var fs=require("fs");
var zlib=require("zlib");


fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("intput.txt.gz"));
console.log("compress is over");


fs.createReadStream("intput.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("input.txt"));
console.log("gunzip is over");