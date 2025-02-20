const campoCnpj = document.getElementById('campoCNPJ');
const mascara = {
    mask: "00.000.000/0000-00"
};
const mask = IMask(campoCnpj, mascara);

let botaoSalvar = document.getElementById("btn-salvar");
botaoSalvar.addEventListener('click', salvar);

function salvar(e) {
    e.preventDefault(); // Impede o envio do formulário

    let campoNome = document.getElementById("campoNome");
    let nome = campoNome.value; // Remove espaços extras
    let cnpj = campoCnpj.value; // Remove espaços extras

    // Validação do nome
    if (nome.length < 3) {
        alert("O nome deve conter no mínimo 3 caracteres.");
        return;
    }

    if (nome.length > 20) {
        alert("O nome deve conter no máximo 20 caracteres.");
        return;
    }

    // Validação do CNPJ
    if (cnpj.length < 14) { // CNPJ sem máscara tem 14 caracteres
        alert("O CNPJ deve conter 14 caracteres numéricos.");
        return;
    }

    console.log("Passou aqui, Nome:", nome, "CNPJ:", cnpj);
}
