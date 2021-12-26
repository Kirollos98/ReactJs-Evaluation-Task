export default function Users(state={},action) {
    switch (action.type){
        case 'ALL_USERS':{
            return {...state,UserList:action.payload}
        }
        case 'User_DETAILS':{
            //console.log("Reduuuucer ", action.payload)
            return {...state,details:action.payload}
        }
        case 'CLEAR_DETAILS':{
            return {...state,details:action.payload}
        }
        case "User_Edidted":{
            return {...state,message:action.payload}
        }
        case "User_Deleted":{
            return {...state,message:action.payload}
        }
        case "User_Added":{
            return {...state,message:action.payload}
        }
        default:{
            return state
        }
    }   
}