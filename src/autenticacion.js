// class definida para las acciones de la autentiacion
class Autentiacion {
  autEmailPass(email, password) {}

  crearCuentaEmailPass(email, password, nombres) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      });
  }

  // // PARA INGRESO CON GOOGLE
  // authCuentaGoogle() {
  // }
}