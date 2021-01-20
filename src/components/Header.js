import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import Home from './Home'
import Journals from './Journals'
import Contact from './Contact'
import Nav from './Nav'


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
          // <div class="container">
            <header className="main-head">
                {/* <Nav /> */}
                <Home />
                <Journals />
                <Contact />
                <footer class="section teal darken-2 white-text center">
                  <p class="flow-text">BestBuy &copy; 2020</p>
                </footer>
              </header>
          // </div>
    );
    }
}

export default Header;