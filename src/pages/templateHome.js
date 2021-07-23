export const home = () => {
    const containerHome = document.createElement('div');
    containerHome.classList.add('sectionHome');
    const pageHome = `
     <div id=" sectionHome">
        <header class="header">
            <img src="images/logo.png"/>
             <p id="nombreUsuario"> la vaca loca </p>
        </header>
        <div class='box'>
            <div id='post' class='containerPost'>
                <textarea id='textPost' class="boxPost" type="textarea">  </textarea>
            </div>
        </div>

        <footer class="footer">
            <img src="images/user.png"/>
        </footer>
    </div>
    `;

    containerHome.innerHTML = pageHome;

    return containerHome;

}