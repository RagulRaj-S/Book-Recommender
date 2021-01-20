import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'



class Search extends React.Component{
    componentDidMount(){
        const sideNav = document.querySelector('.sidenav');
        M.Sidenav.init(sideNav, {});
      }

    render(){
        return(
            <header className="main-head">
              <div class="navbar-fixed">
                <nav class="teal">
                <div class="container">
                  <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">BestBuy</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                      <li>
                        <a href="home">Home</a>
                      </li>
                      <li>
                        <a href="/">Genre</a>
                      </li>
                      <li>
                        <a href="books">Books</a>
                      </li>
                      <li>
                        <a href="/">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                </nav>
                </div>
                <ul class="sidenav" id="mobile-demo">
                  <li>
                    <a href="home">Home</a>
                  </li>
                  <li>
                    <a href="/">Genre</a>
                  </li>
                  <li>
                    <a href="books">Books</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </header>
        );
    }
}

export default Search