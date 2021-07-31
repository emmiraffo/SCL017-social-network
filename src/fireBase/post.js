import {listarPosts} from "./postController.js";


function crearPost (autor, comentario, imagen) {
    const dataBase = firebase.firestore()
    var obj = {
        autor: autor,
        comentario: comentario,
        imagen: imagen,
        fecha: firebase.firestore.FieldValue.serverTimestamp(),
        like:[],
        dislike:[],
        userId: firebase.auth().currentUser.uid, //para agregar id al documento de firestore
        userName: firebase.auth().currentUser.displayName, 

    }

    return dataBase.collection('posts').add(obj)
    .then(refDoc =>{
        //console.log("Id del post => ${refDoc.id}")
        listarPosts()
        
    })
    .catch(error => {
        alert("error creando el post => ${error}")
    });
}



// CON ESTA FUNCIÓN VAMOS A OBTENER LA LISTA DE POSTS

function obtenerPost (idUser, callBack) {
  //  console.log(idUser);
      const dataBase = firebase.firestore()
    if(idUser){
        dataBase.collection("posts")
        .orderBy('fecha', 'desc')//para que aparezcan los post en orden/
        .where('userId', '==', firebase.auth().currentUser.uid)
        .get()
        .then(callBack);
    }else{
      
        dataBase.collection("posts")
        .orderBy('fecha', 'desc')//para que aparezcan los post en orden/
        .get()
        .then(callBack);
    }
}


export { crearPost , obtenerPost }