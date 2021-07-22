import {templateRegistro} from './pages/templateRegistro.js';
import {templateInicioSesion} from './pages/templateInicioSesion.js';
import {templatePrincipal} from './pages/templatePrincipal.js';


// changeRouter funcion para elegir la ruta a la que me dirijo
export const changeRouter = (hash) => {
// se va viendo que pagina se va a cargar
  if (hash === '#/') {
    return showPage(hash);
  }
   if (hash === '#/RegistroUsuario') {
    return showPage(hash);
  }
   if (hash === '#/InicioSesion') {
    return showPage(hash);
  } 
//   if (hash === '#/Entrar') {
//     return showTemplate(hash);
//   } if (hash === '#/Post') {
//     return showTemplate(hash);
//   } else {
//     return showTemplate(hash);
//   };
};

const showPage = (hash) => {
 //console.log("muestra vista")
  const root = document.getElementById('root');
  switch (hash) {
    case '#/': 
      root.innerHTML = '';
      root.appendChild(templatePrincipal());
      break;
    case '#/RegistroUsuario':
      root.innerHTML = '';
      root.appendChild(templateRegistro());
      break;
    case '#/InicioSesion':
      root.innerHTML = '';
      root.appendChild(templateInicioSesion());
      break;
    // case '#/Entrar':
    //   root.innerHTML = '';
    //   root.appendChildl(singIn());
    //   break;
    // case '#/Post':
    //   root.innerHTML = '';
    //   root.appendChild(postTemp());
    //   break;
    default:
      root.innerHTML = `<h2>Página no existe</h2>`;
  };
};