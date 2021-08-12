import { listarPosts } from './postController.js';

function crearPost(autor, comentario, imagen) {
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

// funcion para eliminar Post  ******REVISAR
const deletePost = (postId) => {
  console.log(postId);
  const isConfirm = window.confirm('¿Seguro quieres eliminar tu post?');
  if (isConfirm === true) {
    firebase
      .firestore()
      .collection('posts')
      .doc(postId)
      .delete()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('error al eliminar post:  ', error);
      });
  }
};

// PARA EDITAR LOS POST
const updatePost = (id, updatedPost) => database.collection('post').doc(id).update(updatedPost);

// PARA LOS LIKES

function tooggleLike(postId, uid) {
  const db = firebase.firestore();
  const postRef = db.collection('posts').doc(postId);
  console.log(postRef);

  db.runTransaction((transaction) => transaction.get(postRef).then((doc) => {
    if (!doc.exists) {
      throw 'Document does not exist!';
    }
    const post = doc.data();

    if (post) {
      if (post.like && post.like[uid]) {
        post.countLike--;
        post.like[uid] = null;
      } else {
        post.countLike++;
        if (!post.like) {
          post.like = {};
        }
        post.like[uid] = true;
      }
    }
    transaction.update(postRef, post);
  })).then(() => {
    console.log('Transaction successfully committed!');
  }).catch((error) => {
    console.log('Transaction failed: ', error);
  });
}

export {
  crearPost, obtenerPost, tooggleLike, deletePost, updatePost,
};
