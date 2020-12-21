import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import fire from '../config/Fire';
import M from 'materialize-css';

class Contact extends React.Component{
    state = {
        name : '',
        mail : '',
       message : '',
    }
    
    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
    }

    addProduct = (name,mail,message) => {
        if (name !== '' && mail !== '' && message !== '' ){
                fire.firestore().collection("contacts").add({
                    name,
                    mail,
                    message
                })
          
        this.setState({
          name: '',
          mail: '',
          message: '',
        })
        M.toast({html: 'Message has been Sent!', classes: 'green'});
      }
      
      else{
        this.setState({
            name: '',
            mail: '',
            message: '',
        })
        M.toast({html: 'Please, Fill all the fields!', classes: 'red'});
      }
      }
      

    handleSubmit = (e) => {
        e.preventDefault();
        this.addProduct(this.state.name, this.state.mail,this.state.message);
      }
      
    render(){
        return(
            <section id="contact" class="section section-contact scrollspy">
            <div class="container">
              <div class="row">
                <div class="col s12 m6">
                  <div class="card-panel grey lighten-3 center">
                    <i class="material-icons medium">email</i>
                    <h5>Contact Us</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sed praesentium delectus. Sit, mollitia
                      quo. Veniam repellat voluptas ipsum doloremque?</p>
                  </div>
                </div>
                <div class="col s12 m6">
                  <div class="card-panel grey lighten-3">
                    <h5>Please fill out this form</h5>
                    <div class="input-field">
                      <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name}/>
                      <label for="name">Name</label>
                    </div>
                    <div class="input-field">
                      <input type="email" id="email" name="mail" onChange={this.handleChange} value={this.state.mail}/>
                      <label for="mail">Email</label>
                    </div>
                    <div class="input-field">
                      <textarea class="materialize-textarea" id="message" name="message" onChange={this.handleChange} value={this.state.message}></textarea>
                      <label for="message">Message</label>
                    </div>
                    <div class="valign-wrapper">
                    <input type="submit" value="Submit" class="btn hoverable" onClick={this.handleSubmit}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
        );
    }
}

export default Contact