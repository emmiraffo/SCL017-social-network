// aqui exportaras las funciones que necesites

const auth = {

  crearCuentaEmailPass: (email, password, nombres) =>{
    console.log("autentificacion firebase");

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result =>{

      console.log(result);

    }).c
  },

  autEmailPass: (email, password, callback) =>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      document.getElementById("mensajeUsuario").innerHTML = "Bienvenido, tu login fue exitoso"
      console.log(result);
        console.log(result.user.email);
      if(result.user.emailVerified){
        console.log("Tu email esta verificado")
        callback() 
      }
      else{
        console.log("tu email no esta verificado")
      }
    })
    .catch(error =>{
      document.getElementById("mensajeUsuario").innerHTML = "Tienes un error en la autentificación"
      console.error(error)
    })
  },

  signOut: () =>{
    firebase.auth().signOut()
  },

  // para ingresar con Google

  authCuentaGoogle: (callback) => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // $("#avatar").attr("src", result.user.photoURL);
        console.log(result);
        callback()     
       })

      .catch((error) => {
        console.error(error);
      });
      
  }

};

export default auth;



