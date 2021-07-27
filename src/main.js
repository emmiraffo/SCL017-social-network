// Archivo JS princpal- punto de entrada de la aplicación

import { changeRouter } from './router.js';
import { onAuth }  from './fireBase/auth.js';


onAuth(function logged() {
  changeRouter(window.location.hash);
}, function logout() {
  changeRouter('#/login')
})

window.addEventListener('hashchange', () => {
  changeRouter(window.location.hash);
});
