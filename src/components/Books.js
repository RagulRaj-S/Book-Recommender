import React from 'react'
import fire from '../config/Fire';
import M from 'materialize-css'
import './css/Books.css';

class Books extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        books: [],
        data:''
     }
     this.view = this.view.bind(this);
    }

    view(id){
        this.props.history.push("/book" , id = {id})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      }

    handleSubmitForBookName = (e) => {
        e.preventDefault();
        this.searchProductByBook(this.state.data);
        }

      handleSubmitForAuthorName = (e) => {
            e.preventDefault();
            this.searchProductByAuthor(this.state.data);
        }

     componentDidMount() {
        //  Auto Complete
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

        //Init Firebase
        const temp = this.state.books;
        fire.firestore().collection('books').onSnapshot(snapshot => {
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
                        img: change.doc.data().img
                    })
                }
                this.setState({
                    books: temp
                })
            })
        })
       
    }

    searchProductByBook = (data) => {
        this.setState({
            books: []
        });
        fire.firestore().collection('books').where("bookName", "==", data ).onSnapshot(querySnapshot => {
            let changes = querySnapshot.docChanges();
            changes.forEach(change => {
                    this.state.books.push({
                    //books.push({
                        id: change.doc.data().id,
                        bookName: change.doc.data().bookName,
                        author: change.doc.data().author,
                        bookType: change.doc.data().bookType,
                        desc: change.doc.data().desc,
                        img: change.doc.data().img
                    })
                    this.setState({
                        books: this.state.books
                    })
            })
        })
    }

    searchProductByAuthor = (data) => {
        this.setState({
            books: []
        });
       fire.firestore().collection('books').where("author", "==", data ).onSnapshot(querySnapshot => {
           let changes = querySnapshot.docChanges();
           changes.forEach(change => {
               if (change.type === "added") {
                   this.state.books.push({
                       id: change.doc.data().id,
                       bookName: change.doc.data().bookName,
                       author: change.doc.data().author,
                       bookType: change.doc.data()  .bookType,
                       desc: change.doc.data().desc,
                       img: change.doc.data().img
                   })
               }
               this.setState({
                books: this.state.books
               })
           })
       })
   }
    render(){
         return(
            <section className="displayBooks">
                <section id="search" class="section section-search teal darken-1 white-text center scrollspy">
                <div class="container">
                <div class="row">
                    <div class="col s12">
                    <h3>Search Your Book</h3>
                    <div class="input-field">
                        <input class="white grey-text autocomplete" placeholder="Search..." type="search" id="autocomplete-input" name="data" id="data" onChange={this.handleChange} value={this.state.data}/>
                    </div>
                    </div>
                    <div class=" but col s6 align-left">
                      <button class="btn waves-effect col s6" type="submit" name="action" onClick={this.handleSubmitForBookName}>Search by book name
                         <i class="material-icons right">send</i>
                     </button>
                     </div>
                     <div class="but col s6 align-right">
                      <button class="btn waves-effect col s6" type="submit" name="action" onClick={this.handleSubmitForAuthorName}>Search by author's name
                         <i class="material-icons right">send</i>
                     </button>
                     </div>
                </div>
                </div>
            </section>

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
    }
}

export default Books;