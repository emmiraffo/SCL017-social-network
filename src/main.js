// Archivo JS princpal- punto de entrada de la aplicación

import { changeRouter } from './router.js';
import {observer}  from './fireBase/auth.js';

// esta funcion es para cuando cargue la ventana se ejecute el init

// se modifico para que el codigo este dinamico (con los if queda estatico)
// los hash se validan en el archivo de rutas - if

/*const init = () => {
  changeRouter(window.location.hash); // me entrega el hash actual
 // observer();
  window.addEventListener('hashchange', () => { // window esta esuchando las cambios de los hash
    changeRouter(window.location.hash); // ej. /#home es el nuevo hash y la ventana esta informando las nuevas rutas
  });
};
// cuando se carga la pagina se va al metodo init 
window.addEventListener('load', init); // cuando carga la pantalla por primera vez carga el init */


window.addEventListener('load', () => {
changeRouter('#/');
 if (changeRouter() === '#/login'){
   changeRouter('#/login')
}
if (changeRouter(window.location.hash) === '#/home'){
  changeRouter('#/home')
}
if (changeRouter(window.location.hash) === '#/perfil'){
  changeRouter('#/perfil')
}
 } )  


window.addEventListener('hashchange', () => {
  console.log("=>"+window.location.hash)
 changeRouter(window.location.hash); //url nueva
});
