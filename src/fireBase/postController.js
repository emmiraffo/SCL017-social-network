import { crearPost, obtenerPost } from "./post.js"

function listenersPosts() {
  document.getElementById('btnCrearPost').addEventListener('click',()=>{  
    let comentario = document.getElementById('textPost').value
    crearPost('autor', comentario )
  })
}

//DINAMISMO PARA MOSTRAR POST DE DATABASE
function listarPosts() {
  obtenerPost((querySnapshot)=>{
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      let data = doc.data()
      const divPost = document.createElement('div')
      divPost.classList.add('card') 
      divPost.innerHTML = `
        <h1>${data.autor}</h1>
        <h2>${data.comentario}</h2>
        <p>${data.fecha}</p>
      `
    document.getElementById('boxPosted').appendChild(divPost)
  });
  })
}




export { listenersPosts, listarPosts }
