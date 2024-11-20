function onWindiwLoad () {

    // Resister events for external-link buttons
    const snsButtons = document.getElementsByClassName("sns-logo-div");

    for (const button of snsButtons) {
        
        button.onclick = () => {
            window.open(button.dataset.url);
        }
    }
    
    // Resister events for menu
    const menuNav = document.getElementById("menu-nav");
    const menuButton = document.getElementById("menu-button-div");

    menuButton.onclick = () => {

        if (menuNav.classList.contains('menu-open')) {
            menuNav.classList.remove('menu-open');
            menuButton.classList.remove('menu-button-close');

        } else {
            menuNav.classList.add('menu-open');
            menuButton.classList.add('menu-button-close');

        }
    }

    const menuLis = document.getElementsByClassName("menu-li");

    for (const li of menuLis) {
        
        li.onclick = () => {
            const section = document.getElementById(`${li.dataset.sectionId}`);
            section.scrollIntoView({ behavior: "smooth" });

            menuNav.classList.remove('menu-open');
            menuButton.classList.remove('menu-button-close');
        }
    }
}

window.addEventListener('load', onWindiwLoad);