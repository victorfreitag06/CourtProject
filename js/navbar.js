document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname;
    let basePath = path.includes("/src/") ? "navbar.html" : "../src/navbar.html";

    fetch(basePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbar-container").innerHTML = html;
            carregarMenuFlutuante(); // Chama o script do menu após carregar a navbar
        })
        .catch(error => console.error("Erro ao carregar a navbar:", error));
});
