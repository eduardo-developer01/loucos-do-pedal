function iniciaModal(modalID) {
        const modal = document.getElementById(modalID);
        if (modal) {
            modal.classList.add("mostrar");
            modal.addEventListener("click", (e) => {
                if (e.target.id == modalID || e.target.className == "fechar") {
                    modal.classList.remove("mostrar");
                }
            });
        }
}

const logo = document.querySelector("#resev");
logo.addEventListener("click", () => iniciaModal("modal-m"));

document.addEventListener("scroll", () => {
    if (window.pageYOffset > 800) {
        iniciaModal("modal-promocao");
    }
});
