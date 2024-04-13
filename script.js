const btn = document.querySelector(".confirm")

btn.addEventListener("click", consultaResultado)



function consultaResultado() {


    let cep = document.getElementById('cep').value

    if (cep.length !== 8) {
        alert("CEP inválido. O CEP deve conter 8 caracteres.");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => colocarTela(data))

}



function colocarTela(data) {



    const cepElement = document.querySelector("#cep");
    const logradouroElement = document.querySelector("#logradouro");
    const bairroElement = document.querySelector("#bairro");

    const complementoElement = document.querySelector("#complemento");
    const localidadeElement = document.querySelector("#localidade");
    const ufElement = document.querySelector("#uf");


    cepElement.value = data.cep;
    logradouroElement.value = data.logradouro;
    bairroElement.value = data.bairro;
    complementoElement.value = data.complemento;
    localidadeElement.value = data.localidade;
    ufElement.value = data.uf




}




