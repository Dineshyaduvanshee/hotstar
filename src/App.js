import { Component } from 'react';
import React from 'react';
import './App.css';
import Greet from './Components/Greet.js';
import Register from './Components/Register.js';
export class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isRegistered: false,
      name:null,
      email:null,
      password:null,
      showPass:false
    };
  }
  showPasswordHandler = () => {
    this.setState({showPass : !this.state.showPass}, () =>{
    });
  };
  registrationHandler = (event) =>{
    alert('Registration Success');
    const name =event.target.name.value;
    const email =  event.target.email.value;
    const password = event.target.password.value;
    this.setState({name, email, password,isRegistered:true});
    event.preventDefault();
  };
 render(){
  return <div>
    {this.state.isRegistered ? (<Greet
    name={this.state.name}
    email={this.state.email}
   > 
    </Greet>) : (<Register 
    submit={this.registrationHandler} 
    showPass={this.state.showPass}
    click={this.showPasswordHandler}></Register>) }
  </div>
 }
}


export default App;
