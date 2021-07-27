import { crearPost, obtenerPost } from "./post.js"

var imagenURL;


function listenersPosts() {
  document.getElementById('btnCrearPost').addEventListener('click',()=>{  
    let comentario = document.getElementById('textPost').value
    crearPost('autor', comentario , imagenURL )
  })
}

//DINAMISMO PARA MOSTRAR POST DE DATABASE
function listarPosts() {
  obtenerPost((querySnapshot)=>{
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      let data = doc.data()
      const divPost = document.createElement('div')
      divPost.classList.add('card') 
      divPost.innerHTML = `
      <div class="boxInformation">
      <h1>${data.autor}</h1>
      <h2>${data.comentario}</h2>
      <p>${data.fecha}</p>
    </div>
    <div class="boxBtn">
      <div class="like-container">
          <i  class="fa fa-heart-o">  Like</i> 
          <br>
          <p>${data.like}</p>
      </div>
      <div class="dislike-container">
        <i class="fas fa-heart-broken">  Dislike</i>
        <br>
        <p>${data.dislike}</p>
      </div>
    </div>
      `
    document.getElementById('boxPosted').appendChild(divPost)
  });
  })
}

//OBTENER IMAGEN PARA POTS
function listenerFile() {
  var uploader = document.getElementById('uploader');
  document.getElementById('file').addEventListener('change', (e) =>{
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref('imagen/'+file.name);
    var task = storageRef.put(file);
    
    task.on('state_changed', function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        uploader.value = percentage;
    
      }, function error(err) {
        console.error(err)
    
      }, function complete() {
        alert("completado");
        task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
          imagenURL = downloadURL
        });
      });

    });
}

// document.addEventListener("DOMContentLoaded", function(){
//   let btnsDislike= document.getElementsByClassName("dislike-container");
//   console.log(btnsDislike)
//   console.log(btnsDislike.length)
  
  
//   for (let i=0; i < btnsDislike.length; i++){
//       btnsDislike[i].addEventListener("click", function(){
//           console.log("llegamos al btn")
//       counterLikes();
//       })
//   }
//   })
  
//   function counterLikes (){
//       var likeAndDislikeCounter = db.collection("post").doc[0].id;
  
//       // Set the "capital" field of the city 'DC'
//       return likeAndDislikeCounter.update({
//           like: firebase.firestore.FieldValue.increment(1),
//           dislike: firebase.firestore.FieldValue.increment(1)
      
//       })
      
//       .then(() => {
//           console.log("Document successfully updated!");
//       })
//       .catch((error) => {
//           // The document probably doesn't exist.
//           console.error("Error updating document: ", error);
//       });
//   };
  
  

export { listenersPosts, listarPosts, listenerFile }
