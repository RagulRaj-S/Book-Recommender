import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import book from '../components/images/book.jpeg'
import book1 from '../components/images/book1.jpg'
import book2 from '../components/images/book13.jpg'
import { useParams } from 'react-router'

class Journals extends React.Component{
    constructor(props){
        super(props)
        this.viewBook = this.viewBook.bind(this);
        console.log(props)
    }

    viewBook(ref){
        const romantic = "/romantic";
        const horror = "/horror";
        const crime = "/crime";
        if(ref===romantic)
        window.location = romantic;
        if(ref===crime)
        window.location = crime;
        if(ref===horror)
        window.location = horror;
    }

    render(){
        return(
            <section id="journals" class="section section-icons grey lighten-4 center">
            <div class="container">
              <div class="row">
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/romantic")}>
                    <div class="card-image">
                        <img src={book || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Romantic Journal</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/crime")}>
                    <div class="card-image">
                        <img src={book1 || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Crime Journal</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/horror")}>
                    <div class="card-image">
                        <img src={book2 || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Horror Journal</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Journals;