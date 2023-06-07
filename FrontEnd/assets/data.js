export async function importphoto () {
    const importphoto = await fetch("http://localhost:5678/api/works");
    let tabphotos = await importphoto.json();
    const localphoto = JSON.stringify(tabphotos);
    window.localStorage.setItem("localphoto", localphoto);
}