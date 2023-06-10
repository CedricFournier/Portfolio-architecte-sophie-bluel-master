/********************************btn-filtre************************************/
export function createfilter (tabcategories) {
    let sectionprojet = document.querySelector(".divprojeth2");
    let divfiltre = `
            <div class="divfiltre">
                <p id="filtretous">Tous</p>
            </div>
            `
    sectionprojet.insertAdjacentHTML("afterend", divfiltre);
    let btnfiltre = document.querySelector(".divfiltre");   
    let i = 0;
    for (i ; i < tabcategories.length; i++) {
        let pfiltre = `
            <p id="${"categorie" + tabcategories[i].id}">${tabcategories[i].name}</p>
            `
        btnfiltre.insertAdjacentHTML("beforeend", pfiltre);
    }
}

export function removefilter () {
    const divfiltre = document.querySelector(".divfiltre");
    const gallery = document.querySelector(".gallery");
    divfiltre.remove();
    gallery.style.marginTop = "60px";

}

/********************************creation-gallery************************************/
export function creategallery (tabphotos) {
    let i = 0;
    let divgallery = document.querySelector(".gallery");
    divgallery.innerHTML = "";
    for (i ; i < tabphotos.length; i++) {
        let photo = `
            <figure>
                <img src="${tabphotos[i].imageUrl}" alt="${tabphotos[i].title}"></img>
                <figcaption>${tabphotos[i].title}</figcaption>
            </figure>
        `
        divgallery.innerHTML += photo;
    }
}
/********************************user-log************************************/
/**************************header-login**************************/
export function createheader () {
    const heditor = document.querySelector("body");
    const diveditor = `
        <div class="headereditor">    
            <i class="fa-regular fa-pen-to-square"></i>
            <p class="peditor">Mode édition</p>    
            <button class="btn-publier">publier les changements</button>
        </div>
        `
    heditor.insertAdjacentHTML("afterbegin", diveditor)

    const btnlog = document.getElementById("btnlog");
    btnlog.innerText = "Logout";
}

/*******************************ajout-bouton-modifier************************************/
export function createbtnmodifier () {
    const sectionintro = document.querySelector(".imgperso");
    const divmodifier =  document.querySelector(".divprojeth2");
    const iconmodifier1 = `
        <div class="divmodifier1">
            <i class="fa-regular fa-pen-to-square iconmodifier"></i>
            <p>Mode édition</p>
        </div>
        `
    const iconmodifier2 = `
        <div class="divmodifier2">
            <i class="fa-regular fa-pen-to-square iconmodifier"></i>
            <p>Mode édition</p>
        </div>
        `    
    sectionintro.insertAdjacentHTML("afterend", iconmodifier1);
    divmodifier.insertAdjacentHTML("beforeend", iconmodifier2);
}

export function logout () {
    window.localStorage.removeItem('authtoken');
    location.reload();
}

/**************************html-modal******************************/
export function createmodal () {
    const divbody = document.querySelector("body");
    let asideb = `
    <aside id="closemodal" class="aside-modal">
        <section class="div-modal">
            <div id="closemodal" class="croix-modal">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <h1 class="titre-modal">Galerie photo</h1>
            <div class="modal-gallery">
            </div>
            <button id="btn-ajouter">Ajouter une photo</button>
            <button id="btn-clear">Supprimer la galerie</button>
        </section>
    </aside>
        `
    divbody.insertAdjacentHTML("afterbegin", asideb);
}

export function closemodal () {
    const asideb = document.querySelector(".aside-modal");
    document.querySelector(".aside-modal").style.visibility = "hidden";
}

export function cmodifiergallery (tabphotos) {
    let i = 0;
    let modalgallery = document.querySelector(".modal-gallery");
    modalgallery.innerHTML = "";
    for (i ; i < tabphotos.length; i++) {
        let photo = `
        <figure class="figure-modal">
            <button class="icon" id="icon-direction">
                <i class="fa-solid fa-arrows-up-down-left-right fa-xs"></i>
            </button>
            <button class="icon" id="icon-corbeille">
            <i class="fa-solid fa-trash-can fa-xs"></i>
            </button>
            <img src="${tabphotos[i].imageUrl}" alt="${tabphotos[i].title}"></img>
            <button>éditer</button>
        </figure>
        `
        modalgallery.innerHTML += photo;
    }
}