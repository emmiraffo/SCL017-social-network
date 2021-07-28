export const perfil = `
    <div id=" sectionHome">
    <header class="header">
    <img src="images/logo-removebg-preview.png"/>
   <div id="nombre">  </div>
    <a  href="#/home"><i class="fa fa-user"> </i><br>Home</a>
    <a id="logOut"><i class="fa fa-power-off"> </i><br>Salir</a>
  </header>

   <div class='box'>
          <div id='post' class='containerPost'>
          <textarea required id='textPost' class="boxPost" type="textarea" rows="4"  placeholder="¿Qué quieres compartir?"></textarea> 
        <div class="divenviar">
          <div class="file" >
            <label for="file"><i class="fa fa-file-image"></i>  Subir Imagen</label>
            <input id='file' name="uploadedfile" type="file" hidden/>
          </div>
          <progress class="uploader" id="uploader" value="0" max="100" >0%</progress>
          <button id="btnCrearPost" class="btn" type="button" value"txtoBnt><i class="fa fa-paper-plane"></i>   Publicar</button>  
        </div>     
      </div>
      <div id="boxPosted">      
            </div>
   </div>
   <footer class="footer">
          <a  href="#/home"><i class="fa fa-user"> </i><br>Home</a>
         <a id="logOut"><i class="fa fa-power-off"> </i><br>Salir</a>
       </footer>
  </div>
`



