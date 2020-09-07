import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//external
import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"

//reducers
import active_button_reducer from "./Store/Reducers/0_active_nav_button_reducer"

//-config
const rootReducer = combineReducers({ //combine all the state reducers into one root reducer

  active_button: active_button_reducer,

})


const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  
  <React.StrictMode>

    <Provider store={store}>

      <App />

    </Provider>

  </React.StrictMode>,

  document.getElementById('root')
);
