
function crearPost (autor, comentario, imagen) {
    const dataBase = firebase.firestore()
    var obj = {
        autor: autor,
        comentario: comentario,
        imagen: imagen,
        fecha: firebase.firestore.FieldValue.serverTimestamp()
    }
    return dataBase.collection('posts').add(obj)
    .then(refDoc =>{
        console.log("Id del post => ${refDoc.id}")
    })
    .catch(error => {
        alert("error creando el post => ${error}")
    });
}





// CON ESTA FUNCIÓN VAMOS A OBTENER LA LISTA DE POSTS

function obtenerPost (callBack) {
    const dataBase = firebase.firestore()
    dataBase.collection("posts").get().then(callBack);
}




export { crearPost , obtenerPost }