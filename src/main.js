// Archivo JS princpal- punto de entrada de la aplicación

import { changeRouter } from './router.js';


// esta funcion es para cuando cargue la ventana se ejecute el init

window.addEventListener('load', () => {
  // document.getElementById('root').appendChild(templatePrincipal());
 // la pagina esta escuchando cambios de la url
 //1 Chequear si la sesion está activa
 // 2 en caso negativo 
 //3 caso que si está activo mostar la pagina que viene por hash
 changeRouter('#/');
 if (changeRouter() === '#/RegistroUsuario'){
   changeRouter('#/RegistroUsuario')
 }
 if (changeRouter() === '#/InicioSesion'){
  changeRouter('#/InicioSesion')
}
if (changeRouter(window.location.hash) === '#/Home'){
  changeRouter('#/Home')
}

 } )  


window.addEventListener('hashchange', () => {
  console.log("=>"+window.location.hash)
 changeRouter(window.location.hash); //url nueva
});

