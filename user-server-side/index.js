// TODO: Move constants to .env file.
//   const errorHandler = require('./middleware/errorHandler');
//const cookieParser = require('cookie-parser');
//app.use(cookieParser());
const express = require('express');
const path = require('path');
const cors = require('cors'); //
require("./Database/Mongoose.js");
const apiRouter = require('./routers/api');
const User = require('./Models/User.js');

const app = express();
app.use(cors())
//app.use(express.bodyParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'root/')));

app.use('/api', apiRouter);

//app.use(errorHandler);

//----http//localhost:3344/getallUsers
app.listen(3344, () => {
    console.log('started listening on port 3344');
});

// app.post("/getallUsers",(req,res)=>{
//     User.find({},(err,user)=>{
//         if(err){
//             res.send();
//         }else{
//             res.send(users)
//         }
//     })
// })

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./root");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb("Type file is not access", false);
    }
};

const upload = multer({
    storage,
    fileFilter,
});



// app.post("/register",upload.single("porfilePicture"),(req,res,next)=>{
//     console.log(req.body);
//     console.log(req.file);
//     let userToAdd = new User({
//         name:req.body.name,
//         email:req.body.email,
//         city:req.body.city,
//     });

//     if(req.file){
//         userToAdd.profilePicture = req.file.filename;
//     }

//     userToAdd.save((err,data)=>{
//         if(err){
//             err.statusCode=422;
//             //next(err); 
//             res.send(err);     
//         }
//         else{
//             res.status(200).send(data);
//         }
//     });
// })