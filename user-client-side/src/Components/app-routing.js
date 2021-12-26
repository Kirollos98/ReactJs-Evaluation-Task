import { BrowserRouter, Route, Switch } from "react-router-dom"
import AboutComponent from "./about/about-component";
// import EditUser from "../Containers/user-details/user-details-component";
import Home from "../Containers/home-component/home-component";
import NotFound from "./not-found/not-found";
import UserDetailsComponent from "../Containers/user-details/user-details-component";
import addUserComponent from "../Containers/add-user/add-user-component";
import EditUser from "../Containers/edit-user-component/edit-user-component";

const AppRouting = () =>{
    return(
        
        <BrowserRouter>
            <Switch>
                <Route path="/users/Edit/:id" component={EditUser}/>
                <Route path="/users/:id" component={UserDetailsComponent}/>
                <Route path="/users" component={Home}/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={AboutComponent}/>
                <Route path="/Register" component={addUserComponent}/>
                <Route path="*" component={NotFound}/>
            </Switch>   
        </BrowserRouter>
    )
}

export default AppRouting;