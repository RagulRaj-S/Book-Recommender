import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import book1 from '../components/images/book1.jpg'
import M from 'materialize-css'

class Home extends React.Component{

  componentDidMount(){
    // Slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
      });
      const ss = document.querySelectorAll('.scrollspy');
      M.ScrollSpy.init(ss, {});  
  }

    render(){
        return(
            <section class="slider" id="home">
              <ul class="slides">
                <li>
                  <img class="responsive-img" src={book1} alt=""/>
                  <div class="caption center-align">
                    <h2 class="black-text">Take Your Books!</h2>
                    <h5 class="black-text text-lighten-3 hide-on-small-only">If you dont like to read, you haven't found the right book!</h5>
                  </div>
                </li>
              </ul>
            </section>
        );
    }
}

export default Home;