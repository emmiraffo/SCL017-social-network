import { listarPosts } from './postController.js';

function crearPost(autor, comentario, imagen) {
  const textPost = document.getElementById('textPost').value;
  if (textPost.length === 0) {
    alert('Ingresa un texto valido');
  } else {
    const dataBase = firebase.firestore();
    const obj = {
      autor,
      comentario,
      imagen,
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
      like: [],
      userId: firebase.auth().currentUser.uid, // para agregar id al documento de firestore
      userName: firebase.auth().currentUser.displayName,

    };

    return dataBase.collection('posts').add(obj)
      .then(() => {
        // console.log("Id del post => ${refDoc.id}")
        listarPosts();
      })

      .catch(() => {
        // alert('error creando el post => ${error}');
        alert('error creando el post');
      });
  }
  return false;
}

// CON ESTA FUNCIÓN VAMOS A OBTENER LA LISTA DE POSTS

function obtenerPost(idUser, callBack) {
  //  console.log(idUser);
  const dataBase = firebase.firestore();
  if (idUser) {
    dataBase.collection('posts')
      .orderBy('fecha', 'desc')// para que aparezcan los post en orden/
      .where('userId', '==', firebase.auth().currentUser.uid)
      .get()
      .then(callBack);
  } else {
    dataBase.collection('posts')
      .orderBy('fecha', 'desc')// para que aparezcan los post en orden/
      .get()
      .then(callBack);
  }
}

export { crearPost, obtenerPost };
