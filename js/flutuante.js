document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const floatingMenu = document.getElementById("floating-menu");

    menuToggle.addEventListener("click", function () {
        if (floatingMenu.style.display === "block") {
            floatingMenu.style.display = "none";
        } else {
            floatingMenu.style.display = "block";
        }
    });

    // Fecha o menu se o usuário clicar fora dele
    document.addEventListener("click", function (event) {
        if (!floatingMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            floatingMenu.style.display = "none";
        }
    });
});
