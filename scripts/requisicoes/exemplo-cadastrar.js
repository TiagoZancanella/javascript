const campoCnpj = document.getElementById('campoCNPJ');
const mascara = {
    mask: "00.000.000/0000-00"
};
const mask = IMask(campoCnpj, mascara);





let botaoSalvar = document.getElementById("btn-salvar");
botaoSalvar.addEventListener('click', salvar);

function salvar(e) {
    e.preventDefault(); // forms nao deve ser enviado, interrompe o envio do formulário
    let campoNome = document.getElementById("campoNome");
    let nome = campoNome.Value


if (nome.length < 3) {
    alert("nome deve conter no mínomo 3 caracteres");
    return;// faz com que o código abaixo não seja executado, ou seja, encerrando a execução dessa função
}
if (nome.length > 20) {
    alert("nome deve conter no máximo 20 caracteres")
}


    console.log("passou aqui," + nome);
}