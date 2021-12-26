

const UserComponent = ({userInfo})=>{
    console.log("sowarrr",userInfo.profilePicture)
    if(userInfo){
        return(
            <div className="alert alert-dark d-flex justify-content-between text-decoration-none rounded-pill border-secondary hv">
            <div className="ml-5 mt-4">
                <h3>{userInfo.name}</h3>
                <p>{userInfo.email}</p>
                <p>{userInfo.city}</p>
            </div>
            <img className=" rounded-circle" width="200px" height="200px"
            src={`http://localhost:3344/${userInfo.profilePicture}`} 
            alt={userInfo.name} 
            />
        </div>
        )
    }

}

export default UserComponent;