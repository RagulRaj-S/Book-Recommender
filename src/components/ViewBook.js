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
            <body>
            <h1 class="align center"/>
            <div class="container">
            <div class="row">
            {/* <div class="col s6"> */}
            {/* <img class="responsive-img" src={this.state.img} alt="Uploaded images" height="300" width="300"/> */}
            {/* <div class="container">
              <div class="row"> */}
                <div class="col s12 m4">
                <div class="card">
                    <div class="card-image">
                        <img src={this.state.img || 'http://via.placeholder.com/500*500'} alt="images" height="300" width="400"/>
                    </div>
                </div>
                </div>
              {/* </div>
            </div> */}
            {/* </div> */}
            <div class="col s6">
            <b><h3 class="flow-text">{this.state.bookName}</h3></b><br/>
            <h6 ><b>Author : </b>{this.state.author}</h6>
            <h6 ><b>Type : </b>{this.state.bookType}</h6>
            <h6 ><b>Description :  </b>{this.state.desc}</h6>
            <h6 ><b>ID : </b>{this.state.id}</h6>
            &nbsp;&nbsp;
            <br/>
           <a class="btn-large teal">Buy Now</a></div>
          </div>
          </div>
          </body>
          <footer className="page-footer teal">
          <div className="footer-copyright">
            <div class="container center-align">
            <span>©2020 Book Worms Rack</span>
            </div>
          </div>
        </footer>
            
          </div>
        )
    }
}

export default withRouter(ViewBook);