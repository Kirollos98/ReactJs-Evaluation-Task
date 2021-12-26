const express = require('express');
const {register,getAllUsers,FilteredUser,EditUser,DeleteUser} = require("../Controllers/userController.js");

// const { getCurrentUser, register, logout, login } = require('../controllers/userController');
// const checkAuth = require('../middleware/checkAuth');

const userRouter = express.Router();
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
//userRouter.get('/', checkAuth, getCurrentUser);

userRouter.get('/getAllUsers', getAllUsers);
userRouter.get('/FilteredUser', FilteredUser);
userRouter.post('/register',upload.single("profilePicture"), register);
userRouter.post('/EditUser', EditUser);
userRouter.delete('/DeleteUser',DeleteUser)
//userRouter.post('/logout', checkAuth, logout);

module.exports = userRouter;