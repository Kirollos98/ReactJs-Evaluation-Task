import { useState } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { AddUserFun } from "../../Actions/user-action";
import ImageUploader from 'react-images-upload';

const AddUser = ({ AddUserFun, history }) => {

    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [city, setCity] = useState();
    let [picture, setPic] = useState();

    return (
        <div className="container col-6 offset-3 mt-5 card">
            <h3 className="mt-3 ml-5">
                Register
            </h3>
            <div className="form-group col-6 offset-3 p-4">

                <input type="text" value={name} placeholder="Username" className="form-control rounded-pill text-center mt-3" onChange={(e) => {
                    setName(e.target.value)
                }} />
                {name === "" && <p className="text-danger text-center">name is required</p>}
                <input type="text" value={email} placeholder="Email" className="form-control rounded-pill text-center mt-3" onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                {email === "" && <p className="text-danger text-center">email is required</p>}
                <input type="text" value={city} placeholder="City" className="form-control rounded-pill text-center mt-3" onChange={(e) => {
                    setCity(e.target.value);
                }} />

                {city === "" && <p className="text-danger text-center">city is required</p>}
                <input type="file" className=" btn-dark mt-3 d-block ml-5" onChange={(e) => {
                    setPic(e.target.files[0]);
                }} />
                {picture === undefined && <p className="text-danger text-center">picture is required</p>}
                {/* <input type="text" placeholder="Username"/> */}
                <input type="button" value="Register" className="ml-5 p-3 hv btn-dark mt-3" onClick={async () => {
                    if ((name !== undefined && name !== "") && (email !== undefined && email !== "") && (city !== undefined && city !== "") && (picture !== undefined)) {
                        const user = new FormData()
                        user.append("name", name);
                        user.append("email", email);
                        user.append("city", city);
                        user.append("profilePicture", picture);
                        // let user = {
                        //     name: name,
                        //     email: email,
                        //     city: city,
                        //     profilePicture:picture
                        // }
                        console.log("weeeehoooooooo", user.profilePicture)
                        await AddUserFun(user)
                        debugger;
                        history.push("/");
                    }else{
                        alert("All feilds are required please fill them all !")
                    }
                }} />
            </div>
        </div>
    )
}

export default connect(
    null,
    (dispatch) => {
        return bindActionCreators({ AddUserFun }, dispatch)
    }
)(AddUser);