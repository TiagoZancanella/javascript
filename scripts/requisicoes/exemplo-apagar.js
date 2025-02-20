// pegar a lista de elementos que contém a class="botao-apagar"
let botoesApagar = document.getElementsByClassName("botao-apagar");

// foreach percorre cada um dos elementos da lista
Array.from(botoesApagar).forEach(botao) =>{
    //casa um dos botoes atribuiremos o evento click que executará a função apagar
    botao.addEventListener('click',apagar);

});




Swal.fire({


    title: "Deseja apagar o cadastro da empresa 'weg'?",
    text: "Você não poderar reverter isso!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, apagar!",
    cancelButtonText:"Não",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Apagado!",
        text: "Empresa removida com sucesso.",
        icon: "success"
      });
    }
  });