const formulario = document.getElementById("formContato");
const modal = document.getElementById("modalSucesso");
const nomeModal = document.getElementById("nomeModal");
const fecharModal = document.getElementById("fecharModal");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;

        nomeModal.textContent = nome;

        modal.classList.add("ativo");

        formulario.reset();
    });
}

// Fechar a mensagem
if (fecharModal) {

    fecharModal.addEventListener("click", function() {

        modal.classList.remove("ativo");

    });
}
