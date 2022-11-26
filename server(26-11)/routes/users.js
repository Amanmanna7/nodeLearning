const express=require('express');

const router =express.Router();

let bodyParser = require('body-parser');
let jsonParser=bodyParser.json();

// localhost:3000/abcd
// const users1=[
//     {
//         name:"Aman",
//         age:4,
//         id:1,
//     },
//     {
//         name:"Amol",
//         age:4,
//         id:2,
//     }
// ];

const users=[];

router.get('/',(req,res)=>{
    res.send(users);
})

// router.get('/another',(req,res)=>{
//     res.send("hello another");
// })

router.post('/',jsonParser,(req,res)=>{
    let user = req.body;
    // users.push(user);
    // res.send(user);
    // console.log(users);
    user.id=users.length+1;
    // user.name="Mr. "+user.name;
    users.push(user);
    res.status(201).send("User added with name "+user.name); 
})

// parameters -> req.params /:variable
router.get('/:id',(req,res)=>{
    // const abc =req.params;
    const {id}=req.params;
    //{ id : 2 }
    // abc.id
    //

    // let arr=[1,2,3,4];
    // let getElmnt=arr.find((elmnt)=>{
    //     return elmnt==3;
    // })
    // [
    //     {
    //       "name": "amol",
    //       "age": 9,
    //       "id": 1
    //     },
    //     {
    //       "name": "aman",
    //       "age": 9,
    //       "id": 2
    //     },
    //     {
    //       "name": "unkown",
    //       "age": 9,
    //       "id": 3
    //     }
    // ]

    let reqUser=users.find(
        function (elmnt){
            return elmnt.id==id;
        }
    )

    res.send(reqUser);
    
})


// let obj={
//     name:"Aman",
//     age:10,
//     dev:true
// }

// let {name,age}=obj;

// //let name=obj.name;
// //let age=obj.age;

// let name1="Aman"
// console.log(name,age);


// let a='10';
// console.log(a==10);

//find 
//filter



module.exports=router;
