import { addsucess, authtoken } from "./script.js";

let autoken = authtoken();

export async function importcategories () {
    const importcategories = await fetch("http://localhost:5678/api/categories");
    let tabcategories = await importcategories.json();
    let localcategories = JSON.stringify(tabcategories);
    window.localStorage.setItem("localcategories", localcategories);
};

export async function importphoto () {
    const importphoto = await fetch("http://localhost:5678/api/works");
    let tabphotos = await importphoto.json();
    let localphoto = JSON.stringify(tabphotos);
    window.localStorage.setItem("localphoto", localphoto);
};

export async function deleteimg (idimg, tabindex) {
    let urldelete = "http://localhost:5678/api/works/" + idimg;
    console.log(urldelete)
    let reponseimg = await fetch(urldelete, {
        method: "DELETE",
        headers: { "Authorization": 'Bearer ' + autoken.token }
    });
    if (reponseimg.ok) {
        importphoto();
        const idfigure = "f" + tabindex;
        document.getElementById(idfigure).style.display = "none";
    }
    else {
        console.log(reponseimg);
    }
};

export async function ajoutphoto () {
    let myForm = document.getElementById('formaddimg');
    let formData = new FormData(myForm);
    const reponseajout = await fetch('http://localhost:5678/api/works', {
        method: "POST",
        headers: { "Authorization": 'Bearer ' + autoken.token },
        body: formData
    });
    if (reponseajout.ok) {
        importphoto();
        addsucess();
    }
    else {
        console.log(reponseajout);
    }
};

