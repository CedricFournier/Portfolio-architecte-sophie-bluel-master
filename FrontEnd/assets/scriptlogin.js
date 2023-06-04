/********************************login-page************************************/
const formlogin = document.querySelector(".formlogin");
formlogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const infologin = {
        email: event.target.querySelector("[name=email]").value,
        password: event.target.querySelector("[name=password]").value,
    };
    const jsonlogin = JSON.stringify(infologin);
    authentification(jsonlogin);
});

async function authentification (jsonlogin) {
    const rlogin = await fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonlogin
    });
    if (rlogin.ok === true) {
        const rtoken = await rlogin.json();
        const token = JSON.stringify(rtoken);
        window.localStorage.setItem("authtoken", token);
        window.location.href="./index.html";
    }
    else {
        msgerreur()
    }
}

function msgerreur () {
    const password = document.getElementById("password");
    let perreur = `
        <p id="errormsg">Votre mot de passe ou votre email semble erroné.</p>
        `
    password.insertAdjacentHTML("afterend", perreur)
}
