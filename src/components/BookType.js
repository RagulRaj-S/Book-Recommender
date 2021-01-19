import React from 'react'
import { withRouter } from "react-router-dom";
import Search from './Search'
import fire from '../config/Fire';
import M from 'materialize-css'

class BookType extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
            this.state = {
                books: []
             }
             this.view = this.view.bind(this);
         }

         view(id){
            this.props.history.push("/book" , id = {id})
        }

    componentDidMount() {
        //Auto Complete
        const ac = document.querySelector('.autocomplete');
          M.Autocomplete.init(ac, {
              data: {
                "Aruba": null,
                "Cancun Mexico": null,
                "Hawaii": null,
                "Florida": null,
                "California": null,
                "Jamaica": null,
                "Europe": null,
                "The Bahamas": null,
              }
            });
        
        var type;
        const ref = this.props.match.path
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
        type = "biography";
        if(ref===fairy)
        type = "fairy";
        if(ref===suspense)
        type = "suspense";
        if(ref===reference)
        type = "reference";
        if(ref===fantasy)
        type = "fantasy";
        if(ref===history)
        type = "history";
        if(ref===horror)
        type = "horror";
        if(ref===scifi)
        type = "scifi";
        if(ref===travelogue)
        type = "travelogue";
        if(ref===essay)
        type = "essay";
        if(ref===poetry)
        type = "poetry";
        if(ref===philosophy)
        type = "philosophy";

        // console.log(result)
        // if(result === "/horror")
        // {
        const temp = this.state.books;
        fire.firestore().collection('books').where('bookType','==',type).onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === "added") {
                    temp.push({
                        docId : change.doc.id,
                        id: change.doc.data().id,
                        bookName: change.doc.data().bookName,
                        author: change.doc.data().author,
                        bookType: change.doc.data().bookType,
                        desc: change.doc.data().desc,
                        link: change.doc.data().link,
                        img: change.doc.data().img
                    })
                }
                this.setState({
                    books: temp
                })
            })
        })
    // }
    }

    render(){
        return(
            <div>
                <section className="displayBooks">
             <Search />
             <h4 class="center-align">Books</h4>
            <div className="Displaybooks">
            <div class="container">
              <div class="row">
              {this.state.books.map(book => (
                <div className="book" key={book.id}>
                <div class="col s12 m4">
                <div class="card hoverable" onClick={() => this.view(book.docId)}>
                    <div class="card-image">
                        <img src={book.img || 'http://via.placeholder.com/300*150'} alt="Uploaded images" height="300" width="400"/>
                    </div>
                    <div class="card-content">
              <p>{book.bookName}</p>
                    </div>
                </div>
                </div>
                </div>
                // </div>
              ))}
            </div>
            </div>
            </div>
            </section>
        )
           </div>
        )
    }
}

export default withRouter(BookType);