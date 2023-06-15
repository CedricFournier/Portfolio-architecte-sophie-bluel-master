export async function importcategories () {
    const importcategories = await fetch("http://localhost:5678/api/categories");
    let tabcategories = await importcategories.json();
    let localcategories = JSON.stringify(tabcategories);
    window.localStorage.setItem("localcategories", localcategories);
}

export async function importphoto () {
    const importphoto = await fetch("http://localhost:5678/api/works");
    let tabphotos = await importphoto.json();
    let localphoto = JSON.stringify(tabphotos);
    window.localStorage.setItem("localphoto", localphoto);
}

export async function deleteimg (idimg) {
    let urldelete = "http://localhost:5678/api/works/" + idimg;
    console.log(urldelete)
    let authtoken = window.sessionStorage.getItem("authtoken");
    let autoken = JSON.parse(authtoken);
    let reponseimg = await fetch(urldelete, {
        method: "DELETE",
        headers: { "Authorization": 'Bearer ' + autoken.token }
    });
    console.log(reponseimg)
};