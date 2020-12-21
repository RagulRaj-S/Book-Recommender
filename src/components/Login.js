import React from "react";
import fire from '../config/Fire';
import './css/Login.css';
import M from 'materialize-css';

class Login extends React.Component{
  constructor(props)
  {
  super(props);
  this.login=this.login.bind(this);
  this.handleChange=this.handleChange.bind(this);
  this.state={
    mail:"",
    password:""
  }
}

  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.mail,this.state.password).then((u)=>{
      console.log(u);
      this.setState({
        mail:"",
       password:""
      })
      M.toast({html: 'Welcome!', classes: 'green'});
    }).catch((err)=>{
      this.setState({
        mail:"",
       password:""
      })
      M.toast({html: 'Invalid Credentials!', classes: 'red'});
      console.log(err);
    })
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

    render(){
    return(
        <div class="Login">
                 <nav>
                     <div class="nav-wrapper">
                     <a href="#" class="brand-logo center">Administrator</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                         <li><a href="#">BuyBest</a></li>
                     </ul>
                    </div>
                 </nav>
                 <p class="flow-text center-align">Admin Login</p>
                <div className="container"> 
                <div className="card hoverable"> 
                   <div className="card-content">
                  <div class="input-field col s6">
                    <i class="material-icons prefix">person</i>
                     <input name="mail" id="mail" type="text" class="validate" onChange={this.handleChange} value={this.state.mail} />
                     <label for="mail">Mail</label>
                     </div>
                     <div class="row">
                        <div class="input-field col s12">
                        <input name="password" id="password" type="password" class="validate" onChange={this.handleChange} value={this.state.password}/>
                        <label for="password">Password</label>
                        </div>
                    </div>
                      <button class="btn waves-effect col s6" type="submit" name="action" onClick={this.login}>Login
                         <i class="material-icons right">send</i>
                     </button>
                   </div> 
                 </div> 
             </div>           
            </div>
    )
    }
}

export default Login