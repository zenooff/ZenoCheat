function register() {
    let user = document.getElementById("registerUser").value;
    let pass = document.getElementById("registerPass").value;

    if (user === "" || pass === "") {
        alert("Remplis tous les champs !");
        return;
    }

    localStorage.setItem(user, pass);
    document.getElementById("message").innerText =
        "Inscription réussie ✅";
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedPass = localStorage.getItem(user);

    if (storedPass === pass) {
        document.getElementById("message").innerText =
            "Connexion réussie 🎉 Bienvenue " + user;
    } else {
        alert("Pseudo ou mot de passe incorrect ❌");
    }
}
