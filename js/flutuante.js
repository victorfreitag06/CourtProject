document.addEventListener("DOMContentLoaded", function () {
    function initMenu() {
        const menuToggle = document.getElementById("menu-toggle");
        const floatingMenu = document.getElementById("floating-menu");

        if (!menuToggle || !floatingMenu) {
            console.warn("Menu flutuante não encontrado. Verifique se a navbar está carregada.");
            return;
        }

        let overlay = document.getElementById("menu-overlay");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.id = "menu-overlay";
            overlay.style.display = "none"; // Começa oculto
            document.body.appendChild(overlay);
        }

        menuToggle.addEventListener("click", function () {
            const isVisible = floatingMenu.style.display === "block";

            floatingMenu.style.display = isVisible ? "none" : "block";
            overlay.style.display = isVisible ? "none" : "block";
        });

        document.getElementById("close-menu").addEventListener("click", function () {
            floatingMenu.style.display = "none";
            overlay.style.display = "none";
        });

        document.addEventListener("click", function (event) {
            if (!floatingMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                floatingMenu.style.display = "none";
                overlay.style.display = "none";
            }
        });
    }

    // Aguarda um pequeno tempo para garantir que a navbar foi carregada
    setTimeout(initMenu, 100);
});
