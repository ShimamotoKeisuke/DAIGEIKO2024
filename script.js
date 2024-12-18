function onWindowLoad() {
    // Resister events for external-link buttons

    const snsButtons = document.querySelectorAll("#sns-div > div");
    for (const button of snsButtons) {
        button.addEventListener("click", () => window.open(button.dataset.url));
    }

    // Resister events for menu
    const menuNav = document.getElementById("menu-nav");
    const menuButton = document.getElementById("menu-button-div");
    const mainLogo = document.getElementById("daigeiko_logo");
    const cover = document.getElementById("cover");

    const menuCloser = () => {
        if (menuNav.classList.contains("menu-open")) {
            menuNav.classList.remove("menu-open");
            menuButton.classList.remove("menu-button-close");
            cover.classList.remove("menu-button-close");
        } else {
            menuNav.classList.add("menu-open");
            menuButton.classList.add("menu-button-close");
            cover.classList.add("menu-button-close");
        }
    };

    menuButton.addEventListener("click", menuCloser);
    cover.addEventListener("click", menuCloser);

    mainLogo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        menuNav.classList.remove("menu-open");
        menuButton.classList.remove("menu-button-close");
        cover.classList.remove("menu-button-close");
    });

    const menuLis = document.getElementsByClassName("menu-li");

    for (const li of menuLis) {
        li.onclick = () => {
            const section = document.getElementById(`${li.dataset.sectionId}`);
            section.scrollIntoView({ behavior: "smooth" });

            menuNav.classList.remove("menu-open");
            menuButton.classList.remove("menu-button-close");
            cover.classList.remove("menu-button-close");
        };
    }
}

window.addEventListener("load", onWindowLoad);

//// A tool for adding a new section ////

// generateSectionInHTML(
//     "section-sample",
//     "Sample Title",
//     "Sample Text generated by My Sample Function, generateSectionInHTML()",
//     "img/sample-Image.png"
// );

function generateSectionInHTML(sectionId, title, text, ...imgSrcs) {
    const section = document.createElement("section");
    section.id = sectionId;

    const h1 = document.createElement("h1");
    h1.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    section.append(h1);
    section.append(p);

    for (const imgSrc of imgSrcs) {
        const img = document.createElement("img");
        img.src = imgSrc;

        section.append(img);
    }

    document.querySelector("main").append(section);
    console.log(section.outerHTML);
}
