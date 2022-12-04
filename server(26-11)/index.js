const express=require('express');
// const path=require('path');

const app = express();
const userRoute=require('./routes/users');


// app.get('/',(req,res)=>{
//     res.send("Hello this is home page");
// })
// app.get('/about',(req,res)=>{
//     res.send("Hello this is about page");
// })

// localhost:3000
app.use('/user',userRoute);

// const middleware1 =(req,res,next)=>{
//     res.write("In middleware 1\n");
//     console.log("In middleware 1");
//     next();
// }
// const middleware2 =(req,res,next)=>{
//     res.write("In middleware 2\n");
//     console.log("In middleware 2");
//     next();
// }


app.get('/',(req,res)=>{
    console.log("In get");
    res.write("Hello");
    res.end();
})

// app.use('/about',aboutRoute);

app.listen(3000,()=>{
    console.log("listening to 3000 port");
})