import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import fairy from '../components/images/fairy.jpg'
import suspense from '../components/images/suspense.jpg'
import horror from '../components/images/horror.jpg'
import philosophy from '../components/images/philosophy.jpg'
import scifi from '../components/images/scifi.jpg'
import biography from '../components/images/biography.jpg'
import history from '../components/images/history.jpg'
import poetry from '../components/images/poetry.jpg'
import reference from '../components/images/reference.jpg'
import travelogue from '../components/images/travelogue.jpg'
import essay from '../components/images/essay.jpg'
import fantasy from '../components/images/fantasy.jpg'

class Journals extends React.Component{
    constructor(props){
        super(props)
        this.viewBook = this.viewBook.bind(this);
        console.log(props)
    }

    viewBook(ref){
        const biography = "/biography";
        const fairy = "/fairy";
        const suspense = "/suspense";
        const reference = "/reference";
        const fantasy = "/fantasy";
        const history = "/history";
        const horror = "/horror";
        const scifi = "/scifi";
        const travelogue = "/travelogue";
        const essay = "/essay";
        const poetry = "/poetry";
        const philosophy = "/philosophy";
        
        if(ref===biography)
        window.location = biography;
        if(ref===fairy)
        window.location = fairy;
        if(ref===suspense)
        window.location = suspense;
        if(ref===reference)
        window.location = reference;
        if(ref===fantasy)
        window.location = fantasy;
        if(ref===history)
        window.location = history;
        if(ref===horror)
        window.location = horror;
        if(ref===scifi)
        window.location = scifi;
        if(ref===travelogue)
        window.location = travelogue;
        if(ref===essay)
        window.location = essay;
        if(ref===poetry)
        window.location = poetry;
        if(ref===philosophy)
        window.location = philosophy;
    }

    render(){
        return(
            <section id="journals" class="section section-icons grey lighten-4 center">
            <div class="container">
              <div class="row">
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/biography")}>
                    <div class="card-image">
                        <img src={biography || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Biography/Auto-Biography</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/fairy")}>
                    <div class="card-image">
                        <img src={fairy || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Fairy Tale</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/suspense")}>
                    <div class="card-image">
                        <img src={suspense || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Suspense/Thriller</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/reference")}>
                    <div class="card-image">
                        <img src={reference || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Reference Books</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/fantasy")}>
                    <div class="card-image">
                        <img src={fantasy || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Fantasy</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/history")}>
                    <div class="card-image">
                        <img src={history || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Historical Fiction</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/horror")}>
                    <div class="card-image">
                        <img src={horror || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Horror</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/scifi")}>
                    <div class="card-image">
                        <img src={scifi || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Science Fiction</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/travelogue")}>
                    <div class="card-image">
                        <img src={travelogue || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Travelogue</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/essay")}>
                    <div class="card-image">
                        <img src={essay || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Essay</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/poetry")}>
                    <div class="card-image">
                        <img src={poetry || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Poetry</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.viewBook("/philosophy")}>
                    <div class="card-image">
                        <img src={philosophy || 'http://via.placeholder.com/300*150'} alt="images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
                        <p>Philosophy</p>
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