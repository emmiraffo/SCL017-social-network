$('#btnCrearPost').click(() =>{
    const post = new Post()
    const user = firebase.auth().currentUser

    if (user == null){
        Materialize.toast("Registrate para crear tu publicación", 4000)
        return
    }
    const titulo = $('#tituloNewPost').val()
    const descripcion = $('#descripcionNewPost').val()
    const videoLink = $('#linkVideoNewPost').val()
    const imagenLink = sessionStorage.getItem('imgNewPost') == 'null'
      ? null
      : sessionStorage.getItem('imgNewPost')

    post
      .crearPost(
        user.uid,
        user.email,
        titulo,
        descripcion,
        imagenLink,
        videoLink
      )
      .then(resp => {
        Materialize.toast(`Post creado correctamente`, 4000)
        $('.modal').modal('close')
      })
      .catch(err => {
        Materialize.toast(`Error => ${error}`, 4000)
      })
  })
})