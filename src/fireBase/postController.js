import { crearPost, obtenerPost, deletePost, tooggleLike } from './post.js';

let imagenURL = '';

// Saludos, Nombre de usuario y Foto 
function mostrarsaludo() {
  const divName = document.createElement('div');
  divName.innerHTML = ` 
  <p id="nombreUsuario"><br> !Hola, ${firebase.auth().currentUser.displayName}! </p>
  `;
  document.getElementById('nombre').appendChild(divName);
}
function mostrarNombreUsuario() {
  const divName = document.createElement('div');
  divName.innerHTML = ` 
  <p id="nombreUsuario"><br> ${firebase.auth().currentUser.displayName} </p>
  `;
  document.getElementById('nombre').appendChild(divName);
}

function mostrarPhoto() {
  const imagenUsuario = firebase.auth().currentUser.photoURL;

  if (imagenUsuario) {
    const divphoto = document.createElement('div');

    divphoto.innerHTML = ` 
        <div clase"imgMovie"><img src=${imagenUsuario} ></div>
        `;
    document.getElementById('photo').appendChild(divphoto);
  }
}

// DINAMISMO PARA MOSTRAR POST DE DATABASE
function listarPosts(idUser) {
  const currentUser = firebase.auth().currentUser.uid;
  obtenerPost(idUser, (querySnapshot) => {
    document.getElementById('boxPosted').innerHTML = '';
    querySnapshot.forEach((doc) => {
      //  console.log(`${doc.id} => ${doc.data()}`);
      const data = doc.data();
      const divPost = document.createElement('div');
      divPost.classList.add('card');
      const fecha = new Date(data.fecha.seconds * 1000).toLocaleString();
      // console.log(doc.id)
      let html = `
            <div class="boxInformation">
              <h1>${data.autor}</h1>
              <p>${fecha}</p>
              <h2>${data.comentario}</h2> `
          if(data.imagen) {
              html += ` <div clase="imgMovie"><img src=${data.imagen} style="width: 100%";></div>`
          }
          
          if(currentUser){
            
          html += `<div class="interaction"><button  class='like' value='${doc.id}'>`
          if(data.like[currentUser]) {
            html += `😍`
          } else {
            html += `🙂`
          }
          html += `</button><br>`
          if (data.countLike) {
            html += `</button><br><p>${data.countLike} Me gusta</p>`
          }
          // Condición para que la acción de eliminar y editar solo sean de tus post
          if (data.userId === firebase.auth().currentUser.uid) {
            html += `<button  id='editPost' value='${doc.id}' class='btnEdit'><i class="fas fa-pen"></i></button>
              <button id='deletePost' value='${doc.id}' class='btnDelete'><i class="fas fa-trash-alt"></i></button>
            </div>`;   
          }

        }
      
      
      divPost.innerHTML = html;
      document.getElementById('boxPosted').appendChild(divPost);
    });

    // Evento para boton DELETE POST
    const btnDeleteList = document.querySelectorAll('#deletePost');
    btnDeleteList.forEach((item) => {
      item.addEventListener('click', () => deletePost(item.value));
    });

    const btnLike = document.querySelectorAll('.like');
    btnLike.forEach((item) => {
      item.addEventListener('click', (e) => {
        console.log('me diste like', e);
        tooggleLike(e.target.value, currentUser);
      });
    });
  });
}

// OBTENER IMAGEN PARA POTS
function listenerFile() {
  const uploader = document.getElementById('uploader');
  document.getElementById('file').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`imagen/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    }, (err) => {
      console.error(err);
    }, () => {
      alert('completado');
      task.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        imagenURL = downloadURL;
      });
    });
  });
}

function listenersPosts() {
  document.getElementById('btnCrearPost').addEventListener('click', () => {
    const autor = firebase.auth().currentUser.displayName;
    const comentario = document.getElementById('textPost').value;
    if (comentario.length === 0) {
      alert('Ingresa un texto valido');
    } else {
      document.getElementById('textPost').value = ""
      crearPost(autor, comentario, imagenURL);
      imagenURL = ""
    }  
  });

}



export {listenersPosts, listarPosts, listenerFile, mostrarNombreUsuario, mostrarPhoto, mostrarsaludo};
