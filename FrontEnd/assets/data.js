export async function importphoto () {
    const importphoto = await fetch("http://localhost:5678/api/works");
    let tabphotos = await importphoto.json();
    let localphoto = JSON.stringify(tabphotos);
    window.localStorage.setItem("localphoto", localphoto);
}

export async function importcategories () {
    const importcategories = await fetch("http://localhost:5678/api/categories");
    let tabcategories = await importcategories.json();
    let localcategories = JSON.stringify(tabcategories);
    window.localStorage.setItem("localcategories", localcategories);
}