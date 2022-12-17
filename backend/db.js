const mongoose=require('mongoose');
const mongoUri='mongodb://localhost:27017/eNotes';
const connectMongo=()=>{
    mongoose.connect(mongoUri,()=>{
        console.log("Connected to the MonogDb");
    })
}

module.exports=connectMongo;