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
    };
};

export function removefilter () {
    const divfiltre = document.querySelector(".divfiltre");
    const gallery = document.querySelector(".gallery");
    divfiltre.remove();
    gallery.style.marginTop = "60px";

};

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
    };
};
/********************************user-login************************************/
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
};

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
};

export function logout () {
    window.sessionStorage.removeItem('authtoken');
    location.reload();
};

/**************************html-modal******************************/
export function createmodal () {
    const divbody = document.querySelector("body");
    let asideb = `
    <aside class="aside-modal closemodal">
        <section class="div-modal">
            <div class="leftclose">
                <i class="fa-solid fa-arrow-left-long"></i>
                <i class="fa-solid fa-xmark closemodal"></i>
            </div>
            <div class="modalbody">
                <h2 class="titre-modal">Galerie photo</h2>
                <div class="modal-gallery"></div>
                <button id="btn-ajouter">Ajouter une photo</button>
                <button id="btn-clear">Supprimer la galerie</button>
            </div>
            <div class="modaladd">
                <h2 class="titre-modaladd">Ajout photo</h2>
                <form id="formaddimg" class="formimg" enctype="multipart/form-data" method="post">
                    <div class="divajoutphoto">
                        <i class="fa-regular fa-image"></i>
                        <img src="#" alt="" id="previewimg" >
                        <input type="file" id="image" name="image" accept="image/png, image/jpeg">
                        <label for="image" class="labelimg">+ Ajouter photo</label>    
                        <p class="padd">jpg, png : 4mo max</p>
                    </div>
                    <label for="title" class="titleajout">Titre</label>
                    <input class="inputarea areamodal" type="text" id="title" name="title">
                    <label for="categorie" class="titlecategorie">Catégorie</label>
                    <select class="menuderoulant" name="category" id="category">
                    </select>
                    <hr class="line">
                    <input id="btnajoutimg" type="bouton" value="Valider">
                </form>
            </div>
        </section>
    </aside>
        `
    divbody.insertAdjacentHTML("afterbegin", asideb);
    menucategory();
};

export function cmodifiergallery (tabphotos) {
    let i = 0;
    let modalgallery = document.querySelector(".modal-gallery");
    modalgallery.innerHTML = "";
    for (i ; i < tabphotos.length; i++) {
        let photo = `
        <figure id="figure-modal" class="figure-modal">
            <button class="icon icon-direction">
                <i class="fa-solid fa-arrows-up-down-left-right fa-xs"></i>
            </button>
            <button class="icon icon-corbeille" id="${tabphotos[i].id}">
            <i class="fa-solid fa-trash-can fa-xs"></i>
            </button>
            <img src="${tabphotos[i].imageUrl}" alt="${tabphotos[i].title}"></img>
            <button class="btnedit">éditer</button>
        </figure>
        `
    modalgallery.innerHTML += photo;
    };
};

function menucategory () {
    let localcategories = window.localStorage.getItem('localcategories');
    let tabcategories = JSON.parse(localcategories);
    const menuderoulant = document.querySelector(".menuderoulant");   
    let i = 0;
    for (i ; i < tabcategories.length; i++) {
        let mfiltre = `
            <option value=i>${tabcategories[i].name}</option>
            `
        menuderoulant.insertAdjacentHTML("beforeend", mfiltre);
    };
};

export function closemodal () {
    const asideb = document.querySelector(".aside-modal");
    document.querySelector(".aside-modal").style.display = "none";
};

/**************************html-modal-ajouter******************************/
export function addimg () {
    const modalbody = document.querySelector(".modalbody");
    const modaladd = document.querySelector(".modaladd");
    const leftreturn = document.querySelector(".fa-arrow-left-long");
    modalbody.style.display = "none";
    modaladd.style.display = "flex";
    leftreturn.style.display = "block";
};