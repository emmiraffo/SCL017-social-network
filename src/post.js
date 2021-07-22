crearPost (uid, emailUser, titulo, descripcion, imagenLink, videoLink) {
    return this.Collection("posts").add ({
        uid: uid,
        autor: autor,
        titulo: titulo,
        descripcion: descripcion,
        imagenLink: imagenLink,
        videoLink: videoLink,
        fecha: firebase.firestore.FieldValue.serverTimestamp()
    })
.then(refDoc =>{
    console.log("Id del post => ${refDoc.id}")
})
.catch(error => {
    console.error("error creando el post => ${error}")
})
}