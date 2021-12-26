import axios from "axios";

let baseUrl = "http://localhost:3344/api/user/"








// function outer(){
//     var x =1;
//     function inner(){
//         console.log(x);
//     }
//     var x  = 2;
// }


// outer();
// inner();






export async function getAllUsers() {
    let users = [];
    try {
        let response = await fetch(`${baseUrl}getAllUsers`);
        users = await response.json();
        //localStorage.setItem("userList",JSON.stringify(users));
       // console.log("Users from mongo",users)
    } catch (err) {
        console.log(err);
    }
    return {
        type: "ALL_USERS",
        payload: users
    }

}

export async function FilterUserByID(ID){
    var user;
    try {
        let response = await fetch(`${baseUrl}FilteredUser?id=${ID}`);
        user = await response.json();
        //localStorage.setItem("userList",JSON.stringify(users));
        console.log("Users from mongo in filter Action ",user)
    } catch (err) {
        console.log(err);
    }
    return {
        type: "User_DETAILS",
        payload: user
    }
}
    
export async function EditUserDetails(ID,userObj){
    var user;
    try {
        let response = await fetch(`${baseUrl}EditUser?id=${ID}`,{
            method:"Post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userObj)
        });
        user = await response.json();
        //localStorage.setItem("userList",JSON.stringify(users));
        console.log("Message From Server",user)
    } catch (err) {
        console.log(err);
    }
    //debugger;
    return {
        type: "User_Edidted",
        payload: "user Edited Successfully !"
    }
}

export async function DeleteUser(ID){
    var user;
    try {
        let response = await fetch(`${baseUrl}DeleteUser?id=${ID}`,{method:"Delete"});
        user = await response.json();
        //localStorage.setItem("userList",JSON.stringify(users));
        console.log("Users from mongo in filter Action ",user)
    } catch (err) {
        console.log(err);
    }
    return {
        type: "User_Deleted",
        payload: "user Deleted Successfully !"
    }
}

export async function AddUserFun(userObj){
    var user;
    console.log("AddUserAction",userObj)

    await axios.post(`${baseUrl}register`,userObj);
    // try {
    //     let response = await fetch(`${baseUrl}register`,{
    //         method:"Post",
    //         headers:{
    //             "Content-Type":"multipart/form-data"
    //         },
    //         body:JSON.stringify(userObj)
    //     });
    //     user = await response.json();
    //     //localStorage.setItem("userList",JSON.stringify(users));
    //     console.log("Message From Server",user)
    // } catch (err) {
    //     console.log(err);
    // }
    //debugger;
    return {
        type: "User_Added",
        payload: "user Added Successfully !"
    }
}