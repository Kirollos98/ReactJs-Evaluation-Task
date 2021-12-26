import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EditUserDetails } from "../../Actions/user-action"
import {useHistory} from "react-router-dom"


const EditUser = ({ FilterUserByID, userToEdit , EditUserDetails}) => {

    const history = useHistory();
    let [Name, setName] = useState();
    let [Email, setEmail] = useState();
    let [City, setCity] = useState();
    console.log(userToEdit);

    useEffect(() => {
        setName(userToEdit.name)
        setEmail(userToEdit.email)
        setCity(userToEdit.city)
    }, [])
    
    if (userToEdit) {

        return (
            <div className="container col-6 offset-3 mt-5 card">
                <h3 className="mt-3 ml-5">Edit</h3>
                <form className="form-group col-6 text-center offset-3">
                    <input type="text" name="userName" value={Name} className="form-control rounded-pill text-center mt-3" onChange={(e) => {
                        setName(e.target.value);
                    }} />
                    <input type="text" name="userEmail" value={Email} className="form-control rounded-pill text-center mt-3" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                    <input type="text" name="userCity" value={City} className="form-control rounded-pill text-center mt-3" onChange={(e) => {
                        setCity(e.target.value);
                    }} />

                    <input type="button" value="Save Changes" className="p-3 btn-success mt-3 hv" onClick={
                       async () => {
                            let temp = {
                                name: Name,
                                email: Email,
                                city: City
                            }
                            await EditUserDetails(userToEdit._id, temp);
                            history.push("/");
                        }
                    } />
                </form>
            </div>
        )
    }else{
        <div>
            No User Was fetched
        </div>
    }
}


export default connect(
    (state) => {
        return {
            userToEdit: state.users.details
        }
    },
    (dispatch) => {
        return bindActionCreators({ EditUserDetails }, dispatch)
    }
)(EditUser);