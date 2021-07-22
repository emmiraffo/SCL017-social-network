export const templatePrincipal = () => {
const divHome = document.createElement('div');
  const home = `
    <main id="homePrincipal">
    
        <section id="centerHome">
            
            <button id="btnEntry">Ingresar</button>
            <button id="btnRegister">Registrate</button>

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
};

