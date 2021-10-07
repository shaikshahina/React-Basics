import logo from './logo.svg';
import './App.css';
// import {connect} from 'react-redux';
import React, {Component} from 'react';
import RefDemoFirstMethod from './RefDemoFirstMethod';
import FocusInput from './FocusInput';
import FrParent from './FrParent';
import FocusFunctRef from './FocusFunctRef';
import MyComponent from './MyComponent';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // title: "App title"
      title: "initial title",
      name: "initial name"
    }
  }

  // onChange(event){
  //   console.log(event.target.value);
  // }
   onSubmit = (event) => {
    event.preventDefault();
    // alert("submitted");
    console.log(this.input.value);
  }
  onClick = () => {
    this.setState({
      title: "New App Title",
      name: "New Name"
    })
  }

  render(){
    const AddItem = () =>{
      alert("Welcome");
    }
    const list = ["shahina","aishika","ayyan"];
    return (
      <div className="App">
        {/* approach for state */}
        {/* <h1>{this.state.title}</h1>
        <div onClick= {this.onClick}>Click Here</div> */}
        <MyComponent
        title = {this.state.title}
        name = {this.state.name}
        onClick = {this.onClick}
        />

        {/* approach for ref */}
        {/* <h1>
        {
          list.map((element) => {
            return( <div key = {element} onClick = {AddItem}>{element}</div>
              )
          })
      }
      </h1>
      <form onSubmit = {this.onSubmit}>
      <input onChange = {this.onChange} ref= {input=> this.input = input}/>
      </form> */}
      {/* another refs for class and functional */}
      {/* <RefDemoFirstMethod /> */}
      {/* <FocusInput /> */}
      {/* <FrParent /> */}
      {/* <FocusFunctRef /> */}

      </div>
    );

  }

}


// function App() {
//   const list = ["shahina","aishika","ayyan"]
//   const item = "shahina"
//   const AddItem = () =>{
//     alert("Welcome");
// }
//   return (
//     <div className="App">
//      {/* <h2> {item}</h2> */}
//       {
//         list.map(element => {
//           return(
//           <div onClick = {AddItem}>{element}</div>
//           );
//         })
//       }
//     </div>
//   );
// }

export default App;
