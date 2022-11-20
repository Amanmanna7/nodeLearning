const express=require('express');
const path=require('path');

const app = express();

// const htmlPath=path.join(__dirname,'public');

// app.use(express.static(htmlPath));

app.get('/',(req,res)=>{
    res.send("<h1>This is first Home page </h1>");
    // console.log(res);
})

app.get('/index.html',(req,res)=>{
    res.status(500).sendFile(path.join(__dirname,'public','index.html'));
    // res.json({
    //     name:"Aman",
    //     develpore:true
    // })

    // console.log(res);
})

app.get('/about',(req,res)=>{
    res.send("<h1>This is first Home page </h1>");
    // console.log(res);
})

app.get('/ab*cd',(req,res)=>{
    res.send("<h1>This is ab*cd page </h1>");
    // console.log(res);
})

app.listen(3000,()=>{
    console.log("Listening to 3000");
    // return "Aman";
})




// arrow function
// (a)=>{

// }


// function func(a){
//     return a;
// }

// func(4);
// console.log(a);