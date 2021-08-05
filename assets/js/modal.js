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

const modal_name = document.querySelector('#modal_name'),
    default_name = document.querySelector('#default_name'),
    modal_number = document.querySelector('#modal_number'),
    btnView = document.querySelector('#btnView'),
    user_name = document.querySelector("#user_name").value,
    user_number = document.querySelector('#user_number').value


btnView.addEventListener('click', () => {

    modal_name.innerText = user_name
    default_name.style.color = "transparent"
    modal_number.innerText = user_number
})

