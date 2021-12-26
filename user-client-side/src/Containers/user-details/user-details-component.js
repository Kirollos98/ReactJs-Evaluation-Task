// const UserDetailsComponent = ()=>{
//     return(
//         <div>
//             UserDetails Component Works !!
//         </div>
//     )
// }
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FilterUserByID,DeleteUser } from '../../Actions/user-action'
import { Component, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";



// export default UserDetailsComponent;

const UserDetailsComponent = (props)=>  {//extends Component

    const params = useParams();

    useEffect(async ()=>{
        console.log(props)
        await props.FilterUserByID(params.id)
        console.log(props)

    },[])

    const history = useHistory();


    let renderDeatails = ({User}) => {
        console.log("Render Function",User)
        if(User){
            return (
                <div className="container card mt-3 p-5">
    
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <h3>Name: {User.name}</h3> <br/>
                            <h3>Email: {User.email}</h3><br/>
                            <h3>City: {User.city}</h3>
                        </div>
                        <div className="col-4">
                            <img className=" rounded-circle hv p-2" width="200px" height="200px"
                            src={`http://localhost:3344/${User.profilePicture}`} 
                            alt={User.name} 
                            />
                        </div>
                        <div className="mt-4 ml-5">
                            {/* <Link to={`/users/Edit/${User._id}`} className="btn btn-dark">Edit</Link> */}
                            <input type="button" value="Edit" className=" p-3  btn-dark hv ml-4" onClick={async()=>{
                                // await props.DeleteUser(User._id);
                                history.push(`/users/Edit/${User._id}`)
                            }}/>
                            <input type="button" value="Delete" className=" p-3 btn-danger hv ml-4" onClick={async()=>{
                                
                                //var bol = confirm("are you sure you want to delete ??");
                                // eslint-disable-next-line no-restricted-globals
                                var anser = confirm("Are you sure you want to Delete");

                                if(anser){
                                    await props.DeleteUser(User._id);
                                    history.push("/")
                                }else{
                                    history.push(`/users/${User._id}`)
                                }
                            }}/>
                        </div>
                    </div>
                </div>
                // ({this.editflag == true? this.renderEditForm():<div></div>})

            )
        }
        return(
            <div>
                no details !!!
            </div>
        )
    }

    // render() {
        return(
            <div>
                {renderDeatails(props)}
            </div>
        )
    // }
}

export default connect(
    (state)=>{
        return {
            User: state.users.details
        }
    },
    (dispatch)=>{
        return bindActionCreators({FilterUserByID,DeleteUser},dispatch)
    }
    )(UserDetailsComponent);