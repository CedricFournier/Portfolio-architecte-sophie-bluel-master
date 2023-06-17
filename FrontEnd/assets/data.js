let authtoken = window.sessionStorage.getItem("authtoken");
let autoken = JSON.parse(authtoken);

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

export async function deleteimg (idimg) {
    let urldelete = "http://localhost:5678/api/works/" + idimg;
    console.log(urldelete)
    let reponseimg = await fetch(urldelete, {
        method: "DELETE",
        headers: { "Authorization": 'Bearer ' + autoken.token }
    });
};

export async function ajoutphoto () {
    let myForm = document.getElementById('formaddimg');
    let formData = new FormData(myForm);
    const reponseajout = await fetch('http://localhost:5678/api/works', {
        method: "POST",
        headers: { "Authorization": 'Bearer ' + autoken.token },
        body: formData
    });
   console.log(reponseajout)
   const r = await reponseajout.json();
   console.log(r)
}; 