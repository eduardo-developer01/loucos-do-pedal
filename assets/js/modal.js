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

const sosial_button = document.querySelector("#sosial_button");
sosial_button.addEventListener("click", () => iniciaModal("modal-s"));

document.addEventListener("scroll", () => {
    if (window.pageYOffset > 800) {
        iniciaModal("modal-promocao");
    }
});

const btnView = document.querySelector('#btnView')

const modal_name = document.querySelector('#modal_name')

btnView.addEventListener('click', () => {
    modal_name.innerText = 'foo'
})

const modal_number = document.querySelector('#modal_number')

btnView.addEventListener('click', () => {
    modal_number.innerText = '20'
})
