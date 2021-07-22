// Archivo JS princpal- punto de entrada de la aplicación

import { changeRouter } from './router.js';
import {templatePrincipal} from './pages/templatePrincipal.js';

// esta funcion es para cuando cargue la ventana se ejecute el init
const init= () => {
  document.getElementById('root').appendChild(templatePrincipal());
// la pagina esta escuchando cambios de la url
  window.addEventListener('hashchange', () => {
      console.log("=>"+window.location.hash)
     changeRouter(window.location.hash); //url nueva
  });
};

window.addEventListener('load', init);


//import  auth  from './lib/auth.js';

// para registrarse
// document.getElementById("crearCuentaUsuario").addEventListener("click", () => {

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     auth.crearCuentaEmailPass(email, password, name);
// });

// // para ingresar
// document.getElementById("signIn").addEventListener("click", () =>{
//     let email = document.getElementById("email2").value;
//     let password = document.getElementById("password2").value;

//     auth.autEmailPass(email, password)
// });

// // para ingreso con Google

// document.getElementById("authGoogle").addEventListener("click", () =>{
//  auth.authCuentaGoogle()
// })



// // para cerrar sesión
// document.getElementById("signOut").addEventListener("click", () =>{
//     auth.signOut();
// });