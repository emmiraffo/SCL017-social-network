import { templateInicioSesion } from "./pages/templateInicioSesion.js";
import { home } from "./pages/templateHome.js";
import { registerUser, signIn,logOut, openModal, closeModal, logInGoogle, onAuth } from "./fireBase/auth.js";
import { listenersPosts, listarPosts, listenerFile , mostrarNombreUsuario , mostrarsaludo} from './fireBase/postController.js';
import {perfil} from './pages/templatePerfil.js';


// changeRouter funcion para elegir la ruta a la que me dirijo
export const changeRouter = (hash) => {
  const root = document.getElementById("root");
  switch (hash) {
    case '':
    case '#':
    case "#/login":
      root.innerHTML = templateInicioSesion();
          signIn();
          openModal();
          closeModal();
          registerUser();
          logInGoogle();
          break;
    case '#/home':
      root.innerHTML = home;
      listenersPosts()
      listarPosts()
      listenerFile()
      logOut()
      onAuth(mostrarsaludo)

        break;
    case '#/perfil':
      root.innerHTML = perfil;
      listenersPosts()
      listarPosts()
      onAuth(mostrarNombreUsuario)
      break;
      default:
      root.innerHTML = `<h2>Página no existe</h2>`;
      break;
   
  }
}
