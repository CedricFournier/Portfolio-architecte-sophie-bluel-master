import { ajoutphoto, deleteimg, importcategories, importphoto } from "./data.js";
import { createfilter, creategallery, createheader, createbtnmodifier, logout, removefilter, createmodal, closemodal, cmodifiergallery, addimg } from "./html.js";

importcategories();

importphoto();

/******************************import-local-category**********************/
let localcategories = window.localStorage.getItem('localcategories');
let tabcategories = JSON.parse(localcategories);
createfilter(tabcategories);

/******************************import-local-photo**********************/


export function localphoto () {
    let localphoto = window.localStorage.getItem('localphoto');
    return JSON.parse(localphoto);
};

let tabphotos = localphoto();

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
let authtoken = window.sessionStorage.getItem('authtoken');
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
    document.querySelector(".aside-modal").style.display = "flex";
    cmodifiergallery(tabphotos);
    clickcorbeille();
});

const btnclose = document.querySelectorAll(".closemodal");
let i = 0;
for (i ; i < btnclose.length; i++) {
    let element = btnclose[i];
    element.addEventListener("click", () => {
        closemodal();
        location.reload();
    });
};

const divmodal = document.querySelector(".div-modal");
divmodal.addEventListener("click", (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
});

/**************************delete-element-modal******************************/
function clickcorbeille () {
    let imgphoto = document.querySelectorAll(".icon-corbeille");
    imgphoto.forEach(element => {
        element.addEventListener("click", () => {
            let idimg = element.getAttribute("id");
            let i = 0
            while (tabphotos[i].id < idimg) {
            i++
            }
            let tabindex = i;
            deleteimg(idimg, tabindex);
        });
    });
};

/**************************ajout-element-modal******************************/
const btnajouter = document.getElementById("btn-ajouter");
btnajouter.addEventListener("click", (event) => {
    addimg();
    verif();
});

const btnreturn = document.querySelector(".fa-arrow-left-long");
btnreturn.addEventListener("click", () => {
    gallerymodal();
});

const previewimg = document.getElementById("previewimg");
const image = document.getElementById("image");
const labelimg = document.querySelector(".labelimg");
image.addEventListener("change", () => {
    previewimg.style.display = "block";
    const [file] = image.files
    if (file) {
        labelimg.style.display = "none";
        previewimg.src = URL.createObjectURL(file);
        verif();
    }
});

function gallerymodal () {
    const modalbody = document.querySelector(".modalbody");
    const modaladd = document.querySelector(".modaladd");
    const leftreturn = document.querySelector(".fa-arrow-left-long");
    let tabphotos = localphoto();
    cmodifiergallery(tabphotos);
    modalbody.style.display = "flex";
    modaladd.style.display = "none";
    leftreturn.style.display = "none";
};

const title = document.getElementById("title");
title.addEventListener("input", (event) => {
    verif();
});

const category = document.getElementById("category")
category.addEventListener("change", (event) => {
    verif();
});

const msgerrchamps = document.querySelector(".msgerrchamps");
function verif () {
    if (image.value !== "" && title.value !== "" && category.value !== "") {
        btnajoutimg.style.backgroundColor = "#1D6154";
        msgerrchamps.style.display = "none";
        btnajoutimg.addEventListener("click", (event) => {
            ajoutphoto();
        });
    };
    msgerrorinput();
};

function msgerrorinput () {
    btnajoutimg.addEventListener("click", (event) => {
        btnajoutimg.style.backgroundColor = "#A7A7A7";
        msgerrchamps.style.display = "block";
    }); 
}

export function addsucess () {
    previewimg.style.display = "none";
    labelimg.style.display = "flex";
    title.value = "";
    category.value = "";
    btnajoutimg.style.backgroundColor = "#A7A7A7";
};