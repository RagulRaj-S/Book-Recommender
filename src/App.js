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
import Nav from './components/Nav';

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
        <Nav />
       <Route exact path="/">
          <Header />
        </Route>
      <Route path="/ostrich">
          {this.state.user ? (<Admin />) : (<Login />)}
      </Route>
      <Route path="/home" component={Header}/>
      <Route path="/books" component={Books}/>
      <Route path="/book" component={ViewBook} id/>
      <Route path="/biography" component={BookType} />
      <Route path="/fairy" component={BookType} />
      <Route path="/suspense" component={BookType} />
      <Route path="/reference" component={BookType} />
      <Route path="/fantasy" component={BookType} />
      <Route path="/historical" component={BookType} />
      <Route path="/horror" component={BookType} />
      <Route path="/scifi" component={BookType} />
      <Route path="/travelogue" component={BookType} />
      <Route path="/essay" component={BookType} />
      <Route path="/poetry" component={BookType} />
      <Route path="/philosophy" component={BookType} />
      </Router>
    );  
    }
 }

export default App;
