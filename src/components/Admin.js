import React from "react";
import fire from '../config/Fire';
import M from 'materialize-css';
import './css/Admin.css';
    
export class Admin extends React.Component {
  state = {
    books:[],
    bookName: '',
    author: '',
    bookType: '',
    desc: '',
    imgName:'',
    id:'',
    link:'',
    img: null
}
 
componentDidMount() {
  const prevState = this.state.books;
  fire.firestore().collection('books').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
          if (change.type === "added") {
              prevState.push({
                  docId: change.doc.id,
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
              books: prevState
          })
      })
  })
}


handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}

handleImg = (e) => {
  if (e.target.files[0]) {
      this.setState({
          img: e.target.files[0]
      })
  }
}

addProduct = (bookName,author,bookType,desc,id,link,img) => {
  const storage = fire.storage();
  if (bookName !== '' && author !== '' && bookType !== '' && desc !== '' && img !== '' && id !== '' && link !== ''){
  const uploadtask = storage.ref(`images/${img.name}`).put(img);
  uploadtask.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  }, error => {
      console.log(error.message);
  }, 
  () => {
      storage.ref("images").child(img.name).getDownloadURL().then(url => {
          fire.firestore().collection("books").add({
              id,
              bookName,
              author,
              bookType,
              desc,
              link,
              img: url
          })
      })
  })
  this.setState({
    bookName: '',
    author: '',
    bookType: '',
    desc: '',
    imgName: '',
    id:'',
    link:'',
    img: null
  })
  alert("Book has been uploaded");
  M.toast({html: 'Succuessfully Uploaded!', classes: 'green'});
}

else{
  this.setState({
    bookName: '',
    author: '',
    bookType: '',
    desc: '',
    imgName: '',
    id:'',
    link:'',
    img: null
  })
  M.toast({html: 'Please, Fill all the fields!', classes: 'red'});
}
}

handleSubmit = (e) => {
  e.preventDefault();
  this.addProduct(this.state.bookName, this.state.author,this.state.bookType, this.state.desc,this.state.id,this.state.link,this.state.img);
  document.getElementById('file').value = '';
}

logout(){
  fire.auth().signOut();
}

deletePost = (key, imgurl) => {
  console.log(key);
  console.log("hello");
  var imageRef = fire.storage("images").refFromURL(imgurl)
  fire.firestore().collection('books').doc(key).delete().then(() => {
    console.log("document is successfully deleted");
    this.props.history.push("/")
  }).catch((error) => {
    console.error("error is", error);
  });
  imageRef.delete().then(function(){
    console.log("image deleted")
  }).catch(function(error){
    console.log("error while deleting image")
  });
  
}


  render(){
        return(
          <div class="Admin">
          <header className="main-head">
            <ul class="sidenav" id="Admin">
              <li>
              <a class="waves-effect waves-light btn">Logout</a>
              </li>
            </ul>
          </header>
            <span>
             <p class="flow-text center-align">Add Books</p>
            </span>
            <div className="container"> 
            <div className="card hoverable"> 
               <div className="card-content">
              <div class="input-field col s6">
                <i class="material-icons prefix">book</i>
                 <input name="bookName" id="bookName" type="text" class="validate"  onChange={this.handleChange} value={this.state.bookName}/>
                 <label for="bookName">Book Name</label>
                 </div>
                 <div class="input-field col s6">
                <i class="material-icons prefix">person</i>
                 <input name="author" id="author" type="text" class="validate" onChange={this.handleChange} value={this.state.author}/>
                 <label for="author">Author</label>
                 </div>
                 <div class="input-field col s6">
                <i class="material-icons prefix">notes</i>
                 <input name="bookType" id="bookType" type="text" class="validate" onChange={this.handleChange} value={this.state.bookType}/>
                 <label for="bookType">Book Genre</label>
                 </div>
                 <div class="input-field col s6">
                <i class="material-icons prefix">mode_edit</i>
                 <input name="desc" id="desc" type="text" class="validate" onChange={this.handleChange} value={this.state.desc}/>
                 <label for="desc">Description</label>
                 </div>
                 <div class="input-field col s6">
                <i class="material-icons prefix">notes</i>
                 <input name="id" id="id" type="number" class="validate" onChange={this.handleChange} value={this.state.id}/>
                 <label for="id">ID</label>
                 </div>
                 <div class="input-field col s6">
                <i class="material-icons prefix">link</i>
                 <input name="link" id="link" type="text" class="validate" onChange={this.handleChange} value={this.state.link}/>
                 <label for="link">Link</label>
                 </div>
                 <div class="file-field input-field">
                    <div class="btn">
                        <span>Image</span>
                        <input type="file" onChange={this.handleImg} id='file'/>
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="Choose Book Image" id="imgName"  onChange={this.handleChange} value={this.state.imgName}/>
                    </div>
                    </div>
                  <div class="but">
                  <button class="btn waves-effect col s6" type="submit" name="action" onClick={this.handleSubmit}>Submit
                     <i class="material-icons right">send</i>
                 </button>
                 </div>
               </div> 
             </div> 
         </div>


         <div className="Displaybooks">
        <div class="container">
          <div class="row">
          {this.state.books.map(book => (
            <div className="book" key={book.id}>
        
            <div class="col s12 m4">
            <div class="card hoverable">
                <div class="card-image">
                <img src={book.img || 'http://via.placeholder.com/300*150'} alt="Uploaded images" height="300" width="400"/>
                </div>
                <div class="card-content">
                <p>{book.bookName}</p>
                {/* <p>{book.id}</p>
                <p>{book.docId}</p> */}
                <button class = 'btn btn-danger' onClick={this.deletePost.bind(this, book.docId, book.img)}>delete</button>
                </div>

            </div>
            </div>
            </div>
       
            
          ))}
          </div>
        </div>
        </div>

        </div>
        );
        }
      }

export default Admin;