export const home = `
    <div id=" sectionHome">
      <header class="header">
        <img src="images/logo-removebg-preview.png"/>
       <div id="nombre">  </div>
        <a  href="#/perfil">Mi Perfil</a>
        <a id="logOut">Salir</a>
      </header>

      <div class='box'>
          <div id='post' class='containerPost'>
              <textarea required id='textPost' class="boxPost" type="textarea" rows="4"  placeholder="¿Qué quieres compartir?"></textarea> <br><br>
              <div class="file" ><input id='file' name="uploadedfile" type="file" /></div>
              <progress id="uploader" value="0" max="100" >0%</progress>
              <button id="btnCrearPost" class="btnPost" type="button">Publicar</button>       
           </div>
            <div id="boxPosted">      
            </div>
       </div>
      <footer class="footer">
         <a  href="#/perfil">Mi Perfil</a>
        <a id="logOut">Salir</a>
       </footer>
  </div>
`



