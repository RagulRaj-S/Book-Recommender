import React from 'react';
import { withRouter } from "react-router-dom";
import fire from '../config/Fire';

class ViewBook extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            id: '',
            bookName: '',
            author: '',
            bookType: '',
            desc: '',
            img: ''
         }
        const id = this.props.location.state.id;
        console.log(id)
        this.setValue = this.setValue.bind(this);
    }    

    setValue(data){
        this.setState({
            id: data.id,
            bookName: data.bookName,
            author: data.author,
            bookType: data.bookType,
            desc: data.desc,
            img: data.img
        })
        console.log(this.state.bookName)
    }

    componentDidMount(){
        const id = this.props.location.state.id;
        fire.firestore().collection('books')
        .doc(id)
        .get()
        .then(doc => {
        const data = doc.data();
        this.setValue(data)
    })
    }

    render(){
        
        return(
            <div className="viewBook">
            <nav>
                <div class="nav-wrapper">
                <a href="#" class="brand-logo center">BuyBest</a>
                </div>
            </nav>
            <body>
            <h1 class="align center"/>
            <div class="container">
            <div class="row">
            <div class="col s6">
            <img class="responsive-img" src={this.state.img} alt="Uploaded images" height="300" width="300"/>
            </div>
            
            <b><h3 class="flow-text">{this.state.bookName}</h3></b><br/>
            <h6 ><b>Author : </b>{this.state.author}</h6>
            <h6 ><b>Type : </b>{this.state.bookType}</h6>
            <h6 ><b>Description :  </b>{this.state.desc}</h6>
            <h6 ><b>ID : </b>{this.state.id}</h6>
            <br/>
            <br/>
            <div class="col s6"><a class="btn">Buy Now</a></div>
          </div>
          </div>
          </body>
          </div>
        )
    }
}

export default withRouter(ViewBook);