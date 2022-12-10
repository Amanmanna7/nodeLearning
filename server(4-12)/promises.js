
// new Promise

// let learnPromise= new Promise((resolve,reject)=>{
    
//     setTimeout(() => {
//         resolve("Aman");
//         // reject(new Error("This is the reject"));
//     }, 2000);

// })

// console.log(learnPromise);

// setTimeout(() => {
//     console.log(learnPromise);
// }, 2000);

// .then .catch syntax

// learnPromise.then((data)=>{
//     console.log(data);
// })

// learnPromise.catch((error)=>{
//     console.log(error);
// })

// learnPromise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })


// fs Promises

let fs=require('fs');

let fsPromise=fs.promises.readFile('f1.txt');

console.log(fsPromise);

fsPromise.then((data)=>{console.log(data);}).catch((error)=>{console.log(error);})


