const mongoose= require('mongoose');

const mongoUri="mongodb://localhost:27017/mydb";

mongoose.connect(mongoUri,()=>{
    console.log("Connected to the Mongo DB");
})

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

let User=new mongoose.model("user",userSchema);


const createDocument= async ()=>{
    try {
        const user1=new User({
            name:"1st",
            email:"aman11@gmail.com",
            password:"12345",
        })
        const user2=new User({
            name:"2nd",
            email:"aman12@gmail.com",
            password:"12345",
        })
        const user3=new User({
            name:"3rd",
            email:"aman13@gmail.com",
            password:"12345",
        })
        const user4=new User({
            name:"4th",
            email:"aman14@gmail.com",
            password:"12345",
        })
        const user5=new User({
            name:"5th",
            email:"aman15@gmail.com",
            password:"12345",
        })

        // const result=await user1.save();
        // console.log(result);

        // const result=await User.insertMany([user1,user2,user3,user4,user5]);
        // console.log(result);

        // let result=await User.create({
        //     name:"Amol",
        //     email:"amol@gmail.com",
        //     password:"123"
        // })
        let result=await User.create([
            {
                name:"Amol",
                email:"amol1@gmail.com",
                password:"123"
            },
            {
                name:"Amol",
                email:"amol2@gmail.com",
                password:"123"
            },
            {
                name:"Amol",
                email:"amol3@gmail.com",
                password:"123"
            }
        ])

        console.log(result);
        

    } catch (error) {

        console.log(error);
    }
}

const findUser= async ()=>{
    try {
        const res=await User.find({name:"Aman"}).select(['-password','-email']);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

// createDocument();
findUser();


