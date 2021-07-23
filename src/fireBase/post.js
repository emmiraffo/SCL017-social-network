
function crearPost (autor, comentario) {
    const dataBase = firebase.firestore()
    var obj = {
        autor: autor,
        comentario: comentario,
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

function obtenerPost (callBack) {
    const dataBase = firebase.firestore()
    dataBase.collection("posts").get().then(callBack);
}


export { crearPost , obtenerPost }