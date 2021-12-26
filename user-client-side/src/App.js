import './App.css';
import { Provider } from 'react-redux'
//import {createStore , applyMiddleware} from 'redux'
import { createStore, applyMiddleware} from 'redux';
import promiseMW from 'redux-promise';
import AppRouting from './Components/app-routing';
import rootReducer from "./Reducers" 
import NavBar from './Components/nav-bar/nav-bar';



const createStoreWithMW = applyMiddleware(promiseMW)(createStore)

function App() {
  return (
    <Provider store={createStoreWithMW(rootReducer)}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <NavBar/>
          </div>
          <div className="col-12">
            <AppRouting />
          </div>
        </div>
      </div>
    </Provider>
  );

}

export default App;
