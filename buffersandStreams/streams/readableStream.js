const fs=require('fs');


let readableStream=fs.createReadStream('input.txt');

readableStream.on('data',(chunk)=>{
    console.log("New Chunk");
    console.log(chunk+"");
})

readableStream.on('end',()=>{
    console.log("Read Ended");
})

readableStream.on('error',(error)=>{
    console.log('Error = '+error);
})

