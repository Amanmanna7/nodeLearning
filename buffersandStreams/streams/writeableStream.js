const fs=require('fs');

let readableStream=fs.createReadStream('input.txt');
let writeableStream=fs.createWriteStream('output.txt');

// let i=0;
// readableStream.on('data',(chunk)=>{
//     console.log("New Chunk");
//     writeableStream.write(chunk);
// })

// readableStream.on('end',()=>{
//     console.log("Read Ended");
//     writeableStream.end();
// })

// writeableStream.on('finish',()=>{
//     console.log("Write completed");
// })

// for(let i=0;i<10;i++){
//     writeableStream.write("Hello this is the writeable stream\n");
// }






