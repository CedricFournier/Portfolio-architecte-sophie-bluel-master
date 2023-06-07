/********************************btn-filtre************************************/
export function createfilter () {
    let sectionprojet = document.querySelector(".divprojeth2");
    let pfiltre = `
        <div class="divfiltre">
            <p id="filtretous">Tous</p>
            <p id="filtreobjet">Objets</p>
            <p id="filtreappart">Appartements</p>
            <p id="filtrehresto">Hôtels & restaurants</p>
        </div>
        `
    sectionprojet.insertAdjacentHTML("afterend", pfiltre)
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
            <p class="i">Mode édition</p>
        </div>
        `
    const iconmodifier2 = `
        <div class="divmodifier2">
            <i class="fa-regular fa-pen-to-square iconmodifier"></i>
            <p class="i">Mode édition</p>
        </div>
        `    
    sectionintro.insertAdjacentHTML("afterend", iconmodifier1);
    divmodifier.insertAdjacentHTML("beforeend", iconmodifier2);
}

export function logout () {
    const headereditor = document.querySelector(".headereditor");
    const divmodifier1 = document.querySelector(".divmodifier1")
    const divmodifier2 = document.querySelector(".divmodifier2")
    window.localStorage.removeItem('authtoken');
    btnlog.innerText = "Login";
    headereditor.remove();
    divmodifier1.remove();
    divmodifier2.remove();
}