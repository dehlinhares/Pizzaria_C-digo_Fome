
function calcularConta(){
    const pegaValorDaConta = document.getElementById("valorConta");
    const pegaValorDaTaxa = document.getElementById("valorTaxa");
    const pegaQuantidadeDePessoas = document.getElementById("quantidaDePessoas");
    const calcValorFinal = (parseInt(pegaValorDaConta.value) + parseInt(pegaValorDaTaxa.value)) / parseInt(pegaQuantidadeDePessoas.value);
    
    document.getElementById("resultado").innerHTML = "O valor para cada pagante é de:" + calcValorFinal
}

function formEvent(){
    const form = document.getElementById("form");
    form.addEventListener("submit", (e)=> {
     e.preventDefault();

     calcularConta();
    });
}