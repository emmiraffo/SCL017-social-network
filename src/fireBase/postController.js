import { crearPost, obtenerPost } from "./post.js"
import { likePost, showLikes } from './postInteraction.js';

var imagenURL;


function listenersPosts() {
  document.getElementById('btnCrearPost').addEventListener('click',()=>{ 
    let autor = firebase.auth().currentUser.displayName;
    console.log(autor)
    let comentario = document.getElementById('textPost').value
    crearPost( autor , comentario , imagenURL )
  })
} ;

function mostrarsaludo () {
  const divName = document.createElement('div')
  divName.innerHTML = ` 

  <p id="nombreUsuario"><br> !Hola, ${firebase.auth().currentUser.displayName}! </p>
  
  `
  document.getElementById('nombre').appendChild(divName)
}
function mostrarNombreUsuario () {
  const divName = document.createElement('div')
  divName.innerHTML = ` 
  <p id="nombreUsuario"><br> ${firebase.auth().currentUser.displayName} </p>
  <div clase"imgMovie"><img src=${firebase.auth().currentUser.photoURL} style="width: 100%";></div>
    </div>
  `
  document.getElementById('nombre').appendChild(divName)
}




    

//DINAMISMO PARA MOSTRAR POST DE DATABASE
function listarPosts() {
  obtenerPost((querySnapshot)=>{
    document.getElementById('boxPosted').innerHTML = ''
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      let data = doc.data()
      const divPost = document.createElement('div')
      divPost.classList.add('card') 
      var fecha = new Date(data.fecha.seconds*1000).toLocaleString()
      console.log(doc.id)
      divPost.innerHTML = `
      <div class="boxInformation">
      <h1>${data.autor}</h1>
      <h2>${data.comentario}</h2>
      <p>${fecha}</p>
      <div clase"imgMovie"><img src=${data.imagen} style="width: 100%";></div>
    </div>
    <div class="boxBtn">
      <div class="like-container">

      <button id='like' class='likeButton' value='${doc.id}'><i class="fas fa-heart"></i></button>

   
          <br>
          <p style="display:inlike-block;">${data.like.length} Me gusta</p>

      </div>
    </div>
      `
    document.getElementById('boxPosted').appendChild(divPost)

    const likeButton = document.querySelectorAll('#like');
    likeButton.forEach((item) => {
      console.log("perro",item.value,"gato", item)
      item.addEventListener('click', () => likePost(item.value, item));
    });
    likeButton.forEach((item) => {
      console.log("el otro")
      item.addEventListener('onload', showLikes(item.value, item));
    });
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


export { listenersPosts, listarPosts, listenerFile , mostrarNombreUsuario , mostrarsaludo}
