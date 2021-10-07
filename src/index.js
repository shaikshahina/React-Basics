import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { combineReducers, createStore } from 'redux';
// import { Provider } from 'react-redux';
// import productsReducer from './reducers/product-reducer';
// import userReducer from './reducers/user-reducer';


// const allReducers = combineReducers({
//   products: productsReducer,
//   user: userReducer
// });

// const store = createStore(
//   allReducers,
//   {
//   products: [{name: 'iphone'}],
//   user: 'michale'
//   },
//   window.devToolsExtension && window.devToolsExtension()
// );
// console.log(store.getState());
// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     user: 'John'
//   }
// };
// store.dispatch(updateUserAction);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
