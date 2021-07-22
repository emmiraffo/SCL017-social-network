// se coloca lo que importo


export const templateRegistro = () => {
const divHome = document.createElement('div');
  const home = `
   <main id="homeRegister">
        <section id="startHome">
            <header>
            <img class="logo" src="./img/logo.png">
            </header>
        </section>

        <section id="centerHome">
            <input type="text" id="name" placeholder="Nombre de Usuario">
            <input type="email" id="email" placeholder="E-mail">
            <input type="password" id="pass" placeholder="Crear Contraseña">
        </section>

        <section id="endHome">
            <button id="btnEntry1">Crear Cuenta</button>
            <button id="btnEntry2">Iniciar Sesión</button>
        </section>
   </main>  
   `;
  divHome.innerHTML = home;

//   const btnG = divHome.querySelector('#btnGoogle');
//   btnG.addEventListener('click', () => {
//     loginGoogle();
//   });

//   const btnE = divHome.querySelector('#btnEntry');
//   btnE.addEventListener('click', () => {
//     const mail = divHome.querySelector('#emailEntry').value;
//     const pass = divHome.querySelector('#passEntry').value;
//     singIn(mail, pass);
//   });

//   const btnRegister = divHome.querySelector('#createAccount');
//   btnRegister.addEventListener('click', () => {
//     accountTemp();
//   });

  return divHome;
}

