// import { connect } from 'react-redux'
// import {bindActionCreators} from 'redux';
// import {getAllUsers} from '../../Actions/user-action'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserComponent from '../user/user-component';

const UsersComponent = ({users})=>{

    useEffect(()=>{
        //console.log(users)
        //props.getAllUsers();
    },[])

    let renderUsers = (userList)=>{
        if(userList && userList.length){
            return userList.map((user)=>{
               return <Link key={user._id} to={`/users/${user._id}`} style={{ textDecoration: 'none' }}><UserComponent key={user._id} userInfo={user}/></Link>
            // <UserComponent key={user._id} userInfo={user} />
            })
        }
        return(
            <p>No Users to List</p>
        )
    }
    return(
        <div>
            {renderUsers(users)}
        </div>
    )
}




// const mapStateToProps = (state)=>{
//     console.log("Users Component",state);
//     return {
//         userList:state.users.UserList
//     }
// }

export default UsersComponent