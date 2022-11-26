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

// app.use('/about',aboutRoute);

app.listen(3000,()=>{
    console.log("listening to 3000 port");
})