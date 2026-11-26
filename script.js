
const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".nav");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("ativo");

        const menuAberto = menu.classList.contains("ativo");

        botaoMenu.setAttribute("aria-expanded", menuAberto);
        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );

        botaoMenu.textContent = menuAberto ? "✕" : "☰";
    });

    menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            menu.classList.remove("ativo");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
            botaoMenu.textContent = "☰";
        });
    });
}
