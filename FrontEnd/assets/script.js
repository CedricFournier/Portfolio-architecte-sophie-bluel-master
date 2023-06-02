/********************************import-photo************************************/
const importphoto = await fetch("http://localhost:5678/api/works");
const tabphoto = await importphoto.json();

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

/********************************creation-gallery************************************/
let i = 0;
let divgallery = document.querySelector(".gallery");
for (i ; i < tabphoto.length; i++) {
    let photo = `
        <figure>
            <img src="${tabphoto[i].imageUrl}" alt="${tabphoto[i].title}"></img>
            <figcaption>${tabphoto[i].title}</figcaption>
        </figure>
    `
    divgallery.innerHTML += photo;
}

/********************************fonction-filtrer************************************/
const ftous = document.getElementById("filtretous");
const fobjet = document.getElementById("filtreobjet");
const fappart = document.getElementById("filtreappart");
const fhresto = document.getElementById("filtrehresto");

ftous.addEventListener("click", () => {
	
});

fobjet.addEventListener("click", () => {
	let listphoto = tabphoto.filter(function(itemphoto) {
        return itemphoto.category.name == "Objets";
    });
    
});

fappart.addEventListener("click", () => {
	let listphoto = tabphoto.filter(function(itemphoto) {
        return itemphoto.category.name == "Appartements";
    });
    
});

fhresto.addEventListener("click", () => {
	let listphoto = tabphoto.filter(function(itemphoto) {
        return itemphoto.category.name == "Hotels & restaurants";
    });
    
});

