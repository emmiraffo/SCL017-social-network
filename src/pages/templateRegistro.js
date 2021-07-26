
export const templateRegistro = `

   <div class="modal-container">
   <div class="modal modal-close">
     <p class="close">X</p>

                <div class="container">
                <div class="row">
                    <div class="col s12 m6 registro-bienvenida">
                        <h4>Bienvenido a MIRA</h4>
                        <div class="registro-bienvenida-texto">
                            Publica, qué tal las series y peliculas que estas viendo.
                        </div>
                        <span>Empieza Ahora</span>
                    </div>
                    <div class="col s12 m6 registro-formulario">
                        <div class="input-field">
                            <input id="nombreContactoReg" value="anne.tejas.v" type="text"  maxlength="50" data-length="50" required />
                            <label for="nombreContactoReg">Nombre:</label>
                        </div>
                        <div class="input-field">
                            <input id="emailContactoReg" value="anne.tejas.v@gmail.com" type="email"  maxlength="50" data-length="50" required />
                            <label for="emailContactoReg">E-mail:</label>
                        </div>
                        <div class="input-field">
                            <input id="passwordReg" value="123456" type="password"  maxlength="10" data-length="10" required />
                            <label for="passwordReg">Password:</label>
                        </div>
                        <div class="div-btnInicioSesion">
                            <button id="btnRegisterUser" class="btn waves-effect waves-light">Registrarse </button>
                        </div>      
                        
                        <div class="div-message">
                        <p id="messageModal">. </p>
                        </div> 

                    </div>
                </div>
            </div>

       </div>
  </div>
   `;

   
