import React from "react";
import fire from '../config/Fire';
import M from 'materialize-css';
import './css/Admin.css';
    
export class Admin extends React.Component {
  state = {
    bookName: '',
    author: '',
    bookType: '',
    desc: '',
    imgName:'',
    id:'',
    img: null
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

addProduct = (bookName,author,bookType,desc,id,img) => {
  const storage = fire.storage();
  if (bookName !== '' && author !== '' && bookType !== '' && desc !== '' && img !== '' && id !== ''){
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
    img: null
  })
  M.toast({html: 'Please, Fill all the fields!', classes: 'red'});
}
}

handleSubmit = (e) => {
  e.preventDefault();
  this.addProduct(this.state.bookName, this.state.author,this.state.bookType, this.state.desc,this.state.id, this.state.img);
  document.getElementById('file').value = '';
}

logout(){
  fire.auth().signOut();
}

  render(){
        return(
            <div class="Admin">
              <header className="main-head">
              <nav>
                <div class="nav-wrapper">
                  <a href="#" class="brand-logo center">BestBuy</a>
                  <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><button class="btn" onClick={this.logout}>Logout</button></li>
                  </ul>
                </div>
              </nav>
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
                     <label for="bookType">Book Type</label>
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
            </div>
        );
        }
      }

export default Admin;