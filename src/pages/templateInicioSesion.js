export const templateInicioSesion = () => {
const divHome = document.createElement('div');
  const home = `
   <main id="homeSigIn">
        <section>
            <header>
                <img class="logo" src="./img/logo.png">
            </header>
        </section>

        <section>
            <input type="email"    id="email2" placeholder="E-mail">
            <input type="password" id="pass2" placeholder="Crear Contraseña">
        </section>

        <section>
            <button id="btnEntry3">Google</button>
        </section>
        <h1>hello word</h1>
   </main>  
   `;

  divHome.innerHTML = home;

  return divHome;
}

