
async function waiting(){
    let learnPromise= new Promise((resolve,reject)=>{  
        setTimeout(() => {
            resolve("Aman");
            // reject(new Error("This is the reject"));
        }, 2000);
    })
    console.log("Before");
    let data=await learnPromise;
    console.log(data);
    // learnPromise.then((data)=>{
    //     console.log(data);
    // })
    console.log("After");
}

waiting();