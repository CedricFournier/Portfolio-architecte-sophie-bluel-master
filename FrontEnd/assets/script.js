import { importcategories, importphoto } from "./data.js";
import { createfilter, creategallery, createheader, createbtnmodifier, logout, removefilter, createmodal, closemodal, cmodifiergallery } from "./html.js";

importcategories();

importphoto();

/******************************import-local-photo**********************/
let localcategories = window.localStorage.getItem('localcategories');
let tabcategories = JSON.parse(localcategories);
createfilter(tabcategories);

/******************************import-local-photo**********************/
let localphoto = window.localStorage.getItem('localphoto');
let tabphotos = JSON.parse(localphoto);
creategallery(tabphotos);

/********************************fonction-filtrer************************************/
const ftous = document.getElementById("filtretous");
const fobjet = document.getElementById("categorie1");
const fappart = document.getElementById("categorie2");
const fhresto = document.getElementById("categorie3");

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

/**************************verification-user******************************/
let authtoken = window.localStorage.getItem('authtoken');
const btnlog = document.getElementById("btnlog");
btnlog.addEventListener("click", () => {
    if (authtoken !== null) {
        logout();
    }
    else {
        window.location.href="./loginpage.html"
    }
});

/**************************verification-user******************************/
if (authtoken !== null) {
    createheader()
    createbtnmodifier()
    removefilter()
    createmodal()
}

/**************************open-close-modal******************************/
const btnmodifier2 = document.querySelector(".divmodifier2");
btnmodifier2.addEventListener("click", () => {
    document.querySelector(".aside-modal").style.visibility = "visible";
    cmodifiergallery(tabphotos);
});

const btnclose = document.querySelectorAll("#closemodal");
let i = 0;
for (i ; i < btnclose.length; i++) {
    let element = btnclose[i];
    element.addEventListener("click", () => {
        closemodal();
    });
};