import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import Home from './Home'
import Journals from './Journals'
import Contact from './Contact'

class Header extends React.Component{

    componentDidMount(){
      const sideNav = document.querySelector('.sidenav');
      M.Sidenav.init(sideNav, {});
    }
    render(){
          // Material Boxed
          // const mb = document.querySelectorAll('.materialboxed');
          // M.Materialbox.init(mb, {});
        return(
            <header className="main-head">
              <div class="navbar-fixed">
                <nav class="teal">
                <div class="container">
                  <div class="nav-wrapper">
                    <a href="#" class="brand-logo">BestBuy</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#journals">Journals</a>
                      </li>
                      <li>
                        <a href="books">Books</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                </nav>
                </div>
                <ul class="sidenav" id="mobile-demo">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#journals">Journals</a>
                  </li>
                  <li>
                    <a href="books">Books</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
                <Home />
                <Journals />
                <Contact />
                <footer class="section teal darken-2 white-text center">
                  <p class="flow-text">BestBuy &copy; 2020</p>
                </footer>
              </header>
    );
    }
}

export default Header;