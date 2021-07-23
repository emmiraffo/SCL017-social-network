import {templateRegistro} from './pages/templateRegistro.js';
import {templateInicioSesion} from './pages/templateInicioSesion.js';
import {templatePrincipal} from './pages/templatePrincipal.js';
import {home} from './pages/templateHome.js';
import { listenersPosts, listarPosts } from './fireBase/postController.js';

// changeRouter funcion para elegir la ruta a la que me dirijo
export const changeRouter = (hash) => {

  const root = document.getElementById('root');

  switch (hash) {
    case '':
      root.innerHTML = templatePrincipal;
      //listeners de template principal
      break;
    case '#/RegistroUsuario':
      root.innerHTML = templateRegistro;
      //listeners de template registro
      break;
    case '#/InicioSesio':
      root.innerHTML = templateInicioSesion;
      //listeners de template inicio de sesion
      break;
    case '#/home':
      root.innerHTML = home;
      listenersPosts()
      listarPosts()
        break;
    default:
      root.innerHTML = `<h2>Página no existe</h2>`;
      break;
   
  }
}