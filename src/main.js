import  auth  from './lib/auth.js';

// para registrarse
document.getElementById("crearCuentaUsuario").addEventListener("click", () => {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.crearCuentaEmailPass(email, password, name);
});

// para ingresar
document.getElementById("signIn").addEventListener("click", () =>{
    let email = document.getElementById("email2").value;
    let password = document.getElementById("password2").value;

    auth.autEmailPass(email, password)
});

// para ingreso con Google

document.getElementById("authGoogle").addEventListener("click", () =>{
 auth.authCuentaGoogle()
})



// para cerrar sesión
document.getElementById("signOut").addEventListener("click", () =>{
    auth.signOut();
});