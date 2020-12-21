import React from 'react';
import fire from './config/Fire';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Admin from './components/Admin'
import Books from './components/Books'
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import ViewBook from './components/ViewBook';
import BookType from './components/BookType';

 class App extends React.Component{
   constructor(props)
   {
     super(props);
     this.state={
       user : {}
     }
   }

   componentDidMount(){
    this.authListener();
   }

   authListener(){
     fire.auth().onAuthStateChanged((user)=>{
       if(user)
       {
         this.setState({user})
       }
       else
       {
         this.setState({user:null})
       }
     })
   }
   render(){
    return(
      <Router>
       <Route exact path="/">
          <Header />
        </Route>
      <Route path="/login">
          {this.state.user ? (<Admin />) : (<Login />)}
      </Route>
      <Route path="/books" component={Books}/>
      <Route path="/book" component={ViewBook} id/>
      <Route path="/romantic" component={BookType} />
      <Route path="/crime" component={BookType} />
      <Route path="/horror" component={BookType} />
      </Router>
    );  
    }
 }

export default App;
