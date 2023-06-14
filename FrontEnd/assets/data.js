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
    let reponseimg = await fetch(urldelete, {
        method: "DELETE",
        headers: { "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NjYwMDc1NywiZXhwIjoxNjg2Njg3MTU3fQ.ioEdIEbHiPIGNEUqOr9frR2AVGbQM78XB32cUju6Ds0' }
    });
    console.log(reponseimg)
};