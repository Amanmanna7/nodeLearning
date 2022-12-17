let mongoose=require('mongoose');

const NoteSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
// let User=mongoose.model('user',UserSchema);
// module.exports=User;

module.exports=mongoose.model('note',NoteSchema);