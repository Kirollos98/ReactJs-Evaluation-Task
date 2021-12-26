const User = require('../Models/User');



const register = (req,res,next) => {

    console.log(req.body);
    console.log(req.file);
    let userToAdd = new User({
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
    });

    if(req.file){
        userToAdd.profilePicture = req.file.filename;
    }

    userToAdd.save((err,data)=>{
        if(err){
            err.statusCode=422;
            //next(err); 
            res.send(err);     
        }
        else{
            res.status(200).send(data);
        }
    });
}

const getAllUsers = (req,res) => {
    User.find({}, (err,users)=>{
        if(!err){
            console.log(users)
            res.send(users);
        }
    })
}

const FilteredUser = (req,res)=>{
    console.log(req.query.id);

    User.findOne({_id:req.query.id}, (err,user)=>{
        if(!err){
            console.log(user);
            res.send(user);
        }
    })

}


const EditUser = (req,res)=>{
    console.log(req.query.id);

    User.updateOne({_id:req.query.id},req.body,(err,user)=>{
        if(err){
            res.send("Error Message is "+err)
        }
        console.log(user);
        res.send("User Updated Successfully !")
    })
}

const DeleteUser = (req,res)=>{
    console.log(req.query.id);

    User.deleteOne({_id:req.query.id},req.body,(err,user)=>{
        if(err){
            res.send("Error Message is "+err)
        }
        console.log(user);
        res.send("User Deleted Successfully !")
    })
}

module.exports = {
    register,
    getAllUsers,
    FilteredUser,
    EditUser,
    DeleteUser
}