const express=require('express');

const router =express.Router();

let bodyParser = require('body-parser');
const { updateUser, deleteUser, getUserByID, addUser, getUsers } = require('../controllers/users');
let jsonParser=bodyParser.json();
const { body, validationResult } = require('express-validator');


// router.get('/',getUsers)

// router.post('/',jsonParser,addUser)

// router.get('/:id',getUserByID)

// router.delete('/:id',deleteUser)

// router.patch('/:id',jsonParser,updateUser)



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


let users=[];

router.get('/',
    
    (req,res)=>{
        res.send(users);
})

// router.get('/another',(req,res)=>{
//     res.send("hello another");
// })


router.post('/',jsonParser,[
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('age').isNumeric()],
    (req,res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        let user = req.body;
        users.push(user);
        res.send(user);
        // console.log(users);
        // for(let i=0;i<user.length;i++){
        //     let obj=user[i];
        //     obj.id=users.length+1;
        //     users.push(obj);
        //     res.write("User added with name "+obj.name);
        // }
        // res.end();
        // // user.name="Mr. "+user.name;
        // users.push(user); 
        // res.send();
})

// parameters -> req.params /:variable
router.get('/:id',(req,res)=>{
    // const abc =req.params;
    
    //{ id : 2 }
    // abc.id
    

    // let arr=[1,2,3,4];
    // let getElmnt=arr.find((elmnt)=>{
    //     return elmnt==3;
    // })
    //localhost:3000/user/2/aman
    // req.params-> {id: 2, name : "aman"}
    //  /:id/:name
    // console.log(req.params);
    // {id:2}
    // const {id}=req.params;
    const id=req.params.id;

    let reqUser=users.find(
        function (elmnt){
            return elmnt.id==id;
        }
    )
    if(reqUser==undefined){
        console.log("Id doesn't exist");
        res.send("Id doesn't exist");
    }
    else{
        res.send(reqUser);
    }
    
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    users=users.filter((elmnt)=>{
        return elmnt.id!=id;
    })
    // [id:1,id:3];

    res.send("Deleted the user with id ="+id);
})

router.patch('/:id',jsonParser,(req,res)=>{
    let id=req.params.id;
    let user=users.find((elmnt)=>{
        return elmnt.id==id;
    })
    let name=req.body.name;
    let age=req.body.age;
    //  if(false undefined 0)
    if(name!=undefined){
        user.name=name;
    }
    if(age!=undefined){
        user.age=age;
    }
    res.send(user);
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

// let arr=[
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

// let obj=arr.find((elmnt)=>  {
//     return elmnt.id==3
// })
// filteredArr= [{
//     "name": "amol",
//     "age": 9,
//     "id": 1
//   },{
//     "name": "unkown",
//     "age": 9,
//     "id": 3
//   }]
// let filteredArr=arr.filter((elmnt)=>{
//     return elmnt.id!=2;
// })

// console.log(filteredArr);
// console.log(arr);
// const a=2;
// a=3;


module.exports=router;
