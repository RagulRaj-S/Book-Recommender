import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

class Search extends React.Component{
    render(){
        return(
            <section id="search" class="section section-search teal darken-1 white-text center scrollspy">
                <div class="container">
                <div class="row">
                    <div class="col s12">
                    <h3>Search Your Book</h3>
                    <div class="input-field">
                        <input class="white grey-text autocomplete" placeholder="Search..." type="text" id="autocomplete-input"/>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Search