import { ajoutphoto, deleteimg, importcategories, importphoto } from "./data.js";
import { createfilter, creategallery, createheader, createbtnmodifier, logout, removefilter, createmodal, closemodal, cmodifiergallery, addimg } from "./html.js";

/******************************import-category**********************/
importcategories();

function localcategories () {
    let localcategories = window.localStorage.getItem('localcategories');
    return JSON.parse(localcategories);
};

let tabcategories = localcategories();

createfilter(tabcategories);

/******************************import-photo**********************/
importphoto();

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






/**************************btn-login******************************/
export function authtoken () {
    let authtoken = window.sessionStorage.getItem("authtoken");
    return JSON.parse(authtoken);
};

let autoken = authtoken();
const btnlog = document.getElementById("btnlog");
btnlog.addEventListener("click", () => {
    if (autoken !== null) {
        logout();
    }
    else {
        window.location.href="./loginpage.html"
    }
});

/**************************user-connected******************************/
if (autoken !== null) {
    createheader()
    createbtnmodifier()
    removefilter()
    createmodal()
};






/**************************open-close-modal******************************/
const btnmodifier2 = document.querySelector(".divmodifier2");
btnmodifier2.addEventListener("click", () => {
    document.querySelector(".aside-modal").style.display = "flex";
    let tabphotos = localphoto();
    cmodifiergallery(tabphotos);
    iconmouv();
    clickcorbeille();
});

const btnclose = document.querySelectorAll(".closemodal");
let i = 0;
for (i ; i < btnclose.length; i++) {
    let element = btnclose[i];
    element.addEventListener("click", (event) => {
        event.preventDefault();
        closemodal();
        let tabphotos = localphoto();
        creategallery(tabphotos);
    });
};

const divmodal = document.querySelector(".div-modal");
divmodal.addEventListener("click", (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
});





/**************************gallerie-modal******************************/
const btnreturn = document.querySelector(".fa-arrow-left-long");
btnreturn.addEventListener("click", () => {
    gallerymodal();
    clickcorbeille();
    iconmouv();
    addsucess();
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

function iconmouv () {
    let figuremodal = document.querySelectorAll(".figure-modal");
    figuremodal.forEach(element => {
        element.addEventListener("mouseover", () => {
            let idfigure = element.getAttribute("id");
            let btnmouv = idfigure.substring(1);
            let test = document.getElementById("d" + btnmouv);
            test.style.display = "block"
        })  
        element.addEventListener("mouseout", () => {
            let idfigure = element.getAttribute("id");
            let btnmouv = idfigure.substring(1);
            let test = document.getElementById("d" + btnmouv);
            test.style.display = "none"
        }) 
    })
};





/**************************delete-element-modal******************************/
function clickcorbeille () {
    let corbeille = document.querySelectorAll(".icon-corbeille");
    corbeille.forEach(element => {
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

const btnclear = document.getElementById("btn-clear");
btnclear.addEventListener("click", () => {
    let count = 0;
    for (count ; count < tabphotos.length; count++) {
        let idimg = tabphotos[count].id;
        let tabindex = count;
        console.log(idimg,tabindex)
    };
});



/**************************open-ajout-photo******************************/
const btnajouter = document.getElementById("btn-ajouter");
btnajouter.addEventListener("click", (event) => {
    addimg();
    
});






/**************************verification-fichier-type-taille******************************/
const image = document.getElementById("image");
image.addEventListener("change", () => {
    veriftype();
});

const msgerror = document.querySelector(".msgerror");
const iconimg = document.querySelector(".fa-image");
function veriftype () {
    const [file] = image.files
    if (file.type === "image/png" || file.type === "image/jpeg") {
        veriftaille();
    }
    else {
        iconimg.style.display = "none";
        msgerror.style.display = "block"
        msgerror.innerText = "Fichier incompatible"
    }
};

function veriftaille () {
    const [file] = image.files
    if (file.size < "4000000") {
        previewphoto();
    }
    else {
        iconimg.style.display = "none";
        msgerror.style.display = "block"
        msgerror.innerText = "Fichier trop grand"
    }
};

/**************************preview-photo******************************/
const previewimg = document.getElementById("previewimg");
const labelimg = document.querySelector(".labelimg");
const padd = document.querySelector(".padd");
function previewphoto () {
    previewimg.style.display = "block";
    const [file] = image.files
    if (file) {
        labelimg.style.display = "none";
        padd.style.display = "none";
        previewimg.src = URL.createObjectURL(file);
        verif();
    }
};

/**************************verification-champs-vide******************************/
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
    }
    else {
        btnajoutimg.style.backgroundColor = "#A7A7A7";
    };
};

/**************************btn-envoi-photo******************************/
btnajoutimg.addEventListener("click", (event) => {
    event.preventDefault();
    uploadimg();
});

function uploadimg () {
    if (image.value === "" || title.value === "" || category.value === "") {
        msgerrchamps.style.display = "block";
    }
    else {
        msgerrchamps.style.display = "none";
        ajoutphoto();
    }
};

/**************************success-envoi-photo******************************/
export function addsucess () {
    previewimg.style.display = "none";
    msgerror.style.display = "none"
    iconimg.style.display = "block";
    labelimg.style.display = "flex";
    title.value = "";
    category.value = "";
    btnajoutimg.style.backgroundColor = "#A7A7A7";
    msgerrchamps.style.display = "none";
};