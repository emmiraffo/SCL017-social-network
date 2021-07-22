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

