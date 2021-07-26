import {templateRegistro} from './templateRegistro.js'

export const templateInicioSesion = () => {
   
    const templateInicioSesion = `
            <main id="homeSigIn">
                <input type="email"    id="email" placeholder="E-mail">
                <input type="password" id="password" placeholder="Crear Contraseña">
            </section>

            <section>
                <button id="btnSingIn">ENTRAR</button>
            </section>

            <p id="message"></p>

            <section>
                <p>Ingresa con:</p>
                <button id="btnGoogle">GOOGLE</button> 
               
            </section>

            <section>
                <button id="btnRegister">REGISTRATE</button>
            </section>

        </main>  
        `;

   return  templateInicioSesion + templateRegistro;
  

}