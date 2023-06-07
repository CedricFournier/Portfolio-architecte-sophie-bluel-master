import { importphoto } from "./data.js";
import { createfilter, creategallery, createheader, createbtnmodifier, logout, removefilter } from "./html.js";

createfilter();

importphoto();

/******************************import-local-photo**********************/
let localphoto = window.localStorage.getItem('localphoto');
let tabphotos = JSON.parse(localphoto);
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

const btnlog = document.getElementById("btnlog");
btnlog.addEventListener("click", () => {
    if (authtoken !== null) {
        logout();
        createfilter();
    }
    else {
        window.location.href="./loginpage.html"
    }
});

/**************************verification-user******************************/
let authtoken = window.localStorage.getItem('authtoken');
if (authtoken !== null) {
    createheader()
    createbtnmodifier()
    removefilter()
}
else {

}
