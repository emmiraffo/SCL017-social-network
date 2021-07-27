// MODAL

function openModal (){

    let modalC = document.querySelectorAll(".modal-container")[0];
    let modal = document.querySelectorAll(".modal")[0];

    document.getElementById('btnRegister').addEventListener('click', function (e) {
        console.log("open");

         e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });

}

function closeModal (){

    let cerrar = document.querySelectorAll(".close")[0];
    let modal = document.querySelectorAll(".modal")[0];
    let modalC = document.querySelectorAll(".modal-container")[0];

    cerrar.addEventListener("click", function () {
        modal.classList.toggle("modal-close");
      
        setTimeout(function () {
          modalC.style.opacity = "0";
          modalC.style.visibility = "hidden";
        }, 900);
      });
}


// funcion para crear usuario en firebase
function registerUser(){

    document.getElementById('btnRegisterUser').addEventListener('click',()=>{  
         const username = document.getElementById('nombreContactoReg').value;
         const email = document.getElementById('emailContactoReg').value;
         const password = document.getElementById('passwordReg').value;
     
     
   firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
     
         result.user.updateProfile({
            displayName: username
          })

          const configuracion = {
            url: 'http://localhost:5000/'
          }

          result.user.sendEmailVerification(configuracion)
          .catch(error => {
              console.error(error);
              document.getElementById('messageModal').innerHTML(error.message)
          })
        // se debe cerrar
         firebase.auth().signOut()

          const message = "Revisa tu email para verificar correo e Inicia Sesión" ;
          document.getElementById('messageModal').innerHTML = message;
  
      })
 
      .catch((error) => {
          console.log(error)
          document.getElementById('messageModal').innerHTML=error;
      });
   })
    
}

// para logearse con Google
function logInGoogle (){
    document.getElementById('btnGoogle').addEventListener('click',()=>{ 
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
          .then((result) => {
              console.log(result);
              
            // $("#avatar").attr("src", result.user.photoURL);
            window.location.href="#/home";
           })
    
          .catch((error) => {
            console.error(error);
          });

    });

}

// para cerrar sesión
function logOut (){
    document.getElementById('logOut').addEventListener('click',()=>{ 
        firebase.auth().signOut()
        .then(function () {
         console.log("sesion cerrada");
          window.location.hash = '';
        }).catch(function (error) {
         console.log(error);
        });

    });
  
}

// para iniciar sesión
function signIn(){
    document.getElementById('btnSingIn').addEventListener('click',()=>{  
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href="#/home";
   
        })
        .catch((error) => {
         console.log(error);
         document.getElementById('message').innerHTML=error;

        });


    });
}

//  funcion que observa los cambios del usuario 
function onAuth(looged, logout){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            if (typeof looged == "function") {
                looged()
            }
        } else {
            if (typeof logout == "function") {
                logout()
            }
        }
      });
}

export {registerUser, signIn, logOut, openModal, closeModal, logInGoogle, onAuth}
  
