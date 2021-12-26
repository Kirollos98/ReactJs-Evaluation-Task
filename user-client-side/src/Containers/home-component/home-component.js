import FilterComponent from "../../Components/filter/filter-component";
import UsersComponent from "../../Components/users/users-component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllUsers ,EditUserDetails} from '../../Actions/user-action'
import { Component } from "react";
// import NavBar from "../../Components/nav-bar/nav-bar";
// import { render } from "@testing-library/react";





// class Toggle extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
  
//       // This binding is necessary to make `this` work in the callback
//      // this.handleClick = this.handleClick.bind(this);
//     }
  
//     handleClick() {
//       this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//       }));
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick()}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }










class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredList: props.userList,
            UserListInHome: props.userList
        }
    }

    async componentDidMount() {
        await this.props.getAllUsers();
        console.log("Home Component Props", this.props)
        //localStorage.setItem("userList",JSON.stringify(this.props.userList));
        //var users = JSON.parse(localStorage.getItem("userList"));
        //console.log("Users Object", users)
        this.setState({ UserListInHome: this.props.userList });
        this.setState({ filteredList: this.props.userList });

        //console.log("filtered from ComponentDidMount", this.state.filteredList);
    }

    componentDidUpdate(){
        console.log("when Updated",this.props.message);
    }

    keyWordChangeForFilter = (keyword) => {
        const filteredList = this.state.UserListInHome.filter((item) => {
            return item.name.toLowerCase().includes(keyword.toLowerCase())
        })

        this.setState({ filteredList: filteredList });
    }


    // componentWillReceiveProps(){
    //     console.log("Compoenent will recieve props")
    //     this.setState({UserListInHome:this.props.userList})
    //     this.setState({filteredList:this.props.userList})
    // }
    renderMessage = () => {
        if (this.props.message) {
            return (
                <div class="alert alert-dismissible alert-success" role="alert">
                    {this.props.message}
                </div>
            )
        }
    }
    render() {
        //this.props.getAllUsers();
        // return(
        //     <di>
        //         <Toggle/>
        //     </di>
        // );  
        return (
            <div className="container">
                <div className="row">
                     <div className="col-12">
                        {this.renderMessage() }
                    </div>
                    
                    <div className="col-12 m-4 text-center">
                        <FilterComponent onKeywordsChange={this.keyWordChangeForFilter} />
                    </div>
                    <div className="col-12">
                        <UsersComponent users={this.state.filteredList} />
                    </div>
                </div>
            </div>
        );
    }

}
export default connect(
    (state) => {
        return {
            userList: state.users.UserList,
            message: state.users.message
        }
    },
    (dispatch) => {
        return bindActionCreators({ getAllUsers,EditUserDetails }, dispatch)
    }
)(Home);