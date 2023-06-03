/********************************ajout-filtre************************************/
let sectionprojet = document.querySelector("#portfolio h2");
let pfiltre = `
    <div class="divfiltre">
        <p id="filtretous">Tous</p>
        <p id="filtreobjet">Objets</p>
        <p id="filtreappart">Appartements</p>
        <p id="filtrehresto">Hôtels & restaurants</p>
    </div>
    `
    sectionprojet.insertAdjacentHTML("afterend", pfiltre)

/********************************import-photo************************************/
const importphoto = await fetch("http://localhost:5678/api/works");
let tabphotos = await importphoto.json();

creategallery(tabphotos);

/********************************fonction-filtrer************************************/
const ftous = document.getElementById("filtretous");
const fobjet = document.getElementById("filtreobjet");
const fappart = document.getElementById("filtreappart");
const fhresto = document.getElementById("filtrehresto");

ftous.addEventListener("click", () => {
	creategallery(tabphotos);
});

fobjet.addEventListener("click", () => {
	let tabobjet = tabphotos.filter(function(itemphoto) {
        return itemphoto.category.name == "Objets";
    })
    creategallery(tabobjet);
});

fappart.addEventListener("click", () => {
	let tabappart = tabphotos.filter(function(itemphoto) {
        return itemphoto.category.name == "Appartements";
    });
    creategallery(tabappart);
});

fhresto.addEventListener("click", () => {
	let tabhresto = tabphotos.filter(function(itemphoto) {
        return itemphoto.category.name == "Hotels & restaurants";
    });
    creategallery(tabhresto);
});

/********************************creation-gallery************************************/
function creategallery (tabphotos) {
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
