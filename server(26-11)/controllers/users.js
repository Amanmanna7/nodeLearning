let users=[];


const getUsers=(req,res)=>{
    res.send(users);
}

const addUser=(req,res)=>{
    let user = req.body;
    // users.push(user);
    // res.send(user);
    // console.log(users);
    for(let i=0;i<user.length;i++){
        let obj=user[i];
        obj.id=users.length+1;
        users.push(obj);
        res.write("User added with name "+obj.name);
    }
    res.end();
    // // user.name="Mr. "+user.name;
    // users.push(user); 
    // res.send();
}

const getUserByID=(req,res)=>{
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
    
}

const deleteUser=(req,res)=>{
    const id=req.params.id;
    users=users.filter((elmnt)=>{
        return elmnt.id!=id;
    })
    // [id:1,id:3];

    res.send("Deleted the user with id ="+id);
}

const updateUser=(req,res)=>{
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
}

module.exports={getUsers,addUser,getUserByID,deleteUser,updateUser};