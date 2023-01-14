const fs=require('fs');
const zlib=require('zlib');

let readableStream=fs.createReadStream('input.txt');
let writeableStream=fs.createWriteStream('output.txt.gz');

readableStream.pipe(zlib.createGzip()).pipe(writeableStream);
