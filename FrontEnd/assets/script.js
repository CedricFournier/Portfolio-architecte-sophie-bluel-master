import { deleteimg, importcategories, importphoto } from "./data.js";
import { createfilter, creategallery, createheader, createbtnmodifier, logout, removefilter, createmodal, closemodal, cmodifiergallery, addimg } from "./html.js";

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
    });
};

const divmodal = document.querySelector(".div-modal");
divmodal.addEventListener("click", (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
});

/**************************delete-element-modal******************************/
function clickcorbeille () {
    let i = 1;
    for (i ; i < tabphotos.length; i++) {
        let imgphoto = document.querySelectorAll(".icon-corbeille");
        imgphoto.forEach(element => {
            element.addEventListener("click", () => {
                let idimg = element.getAttribute("id");
                
                console.log(idimg)
            })
        });
    };
};

/**************************ajout-element-modal******************************/
const btnajouter = document.getElementById("btn-ajouter");
btnajouter.addEventListener("click", () => {
    addimg();
});

const btnreturn = document.querySelector(".fa-arrow-left-long");
btnreturn.addEventListener("click", () => {
    const modalbody = document.querySelector(".modalbody");
    const modaladd = document.querySelector(".modaladd");
    const leftreturn = document.querySelector(".fa-arrow-left-long");
    modalbody.style.display = "flex";
    modaladd.style.display = "none";
    leftreturn.style.display = "none";
});

let image = document.getElementById("previewimg");
ajoutimg.onchange = () => {
    const [file] = ajoutimg.files
    if (file) {
      previewimg.src = URL.createObjectURL(file)
    }
  }
