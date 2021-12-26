import { useState } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import {FilterUserByName} from '../../Actions/user-action'

const FilterComponent = (props)=>{
    var [keyWord,setKeyWord] = useState(); //hooks -> state el gow rl calss component 
    return(
        <div className="col-12">

            <div className="form-group offset-3">
                <input type="text"
                className="form-control rounded-pill text-center w-50"
                value={keyWord}
                placeholder="Filter here by name"
                onChange={(e)=>{
                    setKeyWord(e.target.value);
                    console.log(e.target.value);
                    props.onKeywordsChange(e.target.value);
                    }}/>
            </div>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     bindActionCreators({FilterUserByName},dispatch)
// }
//connect(null,mapDispatchToProps)
export default FilterComponent;