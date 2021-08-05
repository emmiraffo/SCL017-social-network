
import { crearPost, obtenerPost ,deletePost, tooggleLike } from "./post.js"


var imagenURL="";


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
  `
  document.getElementById('nombre').appendChild(divName);
}


function mostrarPhoto () { 
  const imagenUsuario = firebase.auth().currentUser.photoURL

  if (imagenUsuario){
    const divphoto = document.createElement('div')
    
    divphoto.innerHTML = ` 
        <div clase"imgMovie"><img src=${imagenUsuario} ></div>
        ` 
        document.getElementById("photo").appendChild(divphoto)
    } 
}

//DINAMISMO PARA MOSTRAR POST DE DATABASE
<<<<<<< HEAD
function listarPosts(idUser) {
 // console.log(idUser);
  obtenerPost(idUser, (querySnapshot)=>{
    document.getElementById('boxPosted').innerHTML = ''
    querySnapshot.forEach((doc) => {
    //  console.log(`${doc.id} => ${doc.data()}`);
      let data = doc.data()
      const divPost = document.createElement('div')
      divPost.classList.add('card') 
      var fecha = new Date(data.fecha.seconds*1000).toLocaleString()
      //console.log(doc.id)
      let html = `
      <div class="boxInformation">
      <h1>${data.autor}</h1>
      <p>${fecha}</p>
      <h2>${data.comentario}</h2> `
      if(data.imagen) {
        html += ` <div clase="imgMovie"><img src=${data.imagen} style="width: 100%";></div>`
      }
     
      html += `</div>
    <div class="boxBtn">
      <div class="like-container">
      <button id='like' class='likeButton' value='${doc.id}'>
        <i class="fas fa-heart"></i>
      </button>
          <br>
          <p style="display:inlike-block;">${data.like.length} Me gusta</p>
      </div>`;
       if(firebase.auth().currentUser){
      html +=  `<div>
        <button id='deletePost' value='${doc.id}' class='btnDelete'>
          <i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
      `
    }

    // Javi esta dentro de un ciclo****
=======
  function listarPosts(idUser) {
    const currentUser = firebase.auth().currentUser.uid
    obtenerPost(idUser, (querySnapshot)=>{
      document.getElementById('boxPosted').innerHTML = ''
      querySnapshot.forEach((doc) => {
        //  console.log(`${doc.id} => ${doc.data()}`);
          let data = doc.data()
          const divPost = document.createElement('div')
            divPost.classList.add('card') 
          var fecha = new Date(data.fecha.seconds*1000).toLocaleString()
          //console.log(doc.id)
          let html = `
            <div class="boxInformation">
              <h1>${data.autor}</h1>
              <p>${fecha}</p>
              <h2>${data.comentario}</h2> `
          if(data.imagen) {
              html += ` <div clase="imgMovie"><img src=${data.imagen} style="width: 100%";></div>`
          }
          
          if(currentUser){
            
          html += `<div class="interaction"><button class='like' value='${doc.id}'>`
          if(data.like[currentUser]) {
            html += `😍`
          } else {
            html += `🙂`
          }
          html += `</button><br>`
          if (data.countLike) {
            html += `</button><br><p>${data.countLike} Me gusta</p>`
          }
          html += `<button  id='editPost' value='${doc.id}' class='btnEdit'><i class="fas fa-pen"></i></button>
            <button id='deletePost' value='${doc.id}' class='btnDelete'><i class="fas fa-trash-alt"></i></button>
          </div>`;   
        }
>>>>>>> 2ea78b03029431de9b71cd26c2c4142f41b43dd0
        divPost.innerHTML = html
        document.getElementById('boxPosted').appendChild(divPost)
    
      });

      // Evento para boton DELETE POST
      const btnDeleteList = document.querySelectorAll('#deletePost');
      btnDeleteList.forEach((item) => {
        item.addEventListener('click', () => deletePost (item.value));
      });

      const btnLike = document.querySelectorAll('.like');
      btnLike.forEach ((item) =>  {
        item.addEventListener('click', (e) => {
          console.log("me diste like", e)
          tooggleLike(e.target.value, currentUser)
        })
      })
    
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

function listenersPosts() {
  document.getElementById('btnCrearPost').addEventListener('click',()=>{ 
    let autor = firebase.auth().currentUser.displayName;
    let comentario = document.getElementById('textPost').value
    crearPost( autor , comentario , imagenURL )
  })
} ;

//FUNCION PARA MOSTRAR LOS LIKES Y CONTARLOS



<<<<<<< HEAD
=======
  

>>>>>>> 2ea78b03029431de9b71cd26c2c4142f41b43dd0
export { listenersPosts, listarPosts, listenerFile , mostrarNombreUsuario , mostrarPhoto, mostrarsaludo}
