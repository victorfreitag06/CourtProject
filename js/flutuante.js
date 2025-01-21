document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const floatingMenu = document.getElementById("floating-menu");

    // Cria o overlay
    const overlay = document.createElement("div");
    overlay.id = "menu-overlay";
    document.body.appendChild(overlay);

    menuToggle.addEventListener("click", function () {
        if (floatingMenu.style.display === "block") {
            floatingMenu.style.display = "none";
            overlay.style.display = "none";
        } else {
            floatingMenu.style.display = "block";
            overlay.style.display = "block";
        }
    });

    document.getElementById("close-menu").addEventListener("click", function () {
        floatingMenu.style.display = "none";
        overlay.style.display = "none"; // Fecha o overlay ao fechar o menu
    });

    // Fecha o menu se o usuário clicar fora dele
    document.addEventListener("click", function (event) {
        if (!floatingMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            floatingMenu.style.display = "none";
            overlay.style.display = "none";
        }
    });
});
