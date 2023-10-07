"use strict";
// Mapeamento do enum tipos.
const tiposMap = {
    "Lanches": "Lanches" /* tipos.Lanches */,
    "Livros": "Livros" /* tipos.Livros */,
    "Transporte": "Transporte" /* tipos.Transporte */,
    "Material didático": "Material did\u00E1tico" /* tipos.Material_didático */,
};
//Funcao para cadastras as despesas.
function cadastrarDespesas() {
    // Obtenha uma coleção de todos os inputs do tipo rádio com o mesmo name
    let radioButtons = document.querySelectorAll('input[name="tipo"]');
    let valorSelecionado = "";
    let tipoSelecionado = undefined;
    // Faz uma busca sobre os inputs do tipo rádio para encontrar o selecionado
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            valorSelecionado = radioButton.value;
            tipoSelecionado = tiposMap[valorSelecionado];
            break;
        }
    }
    // Obtenha o valor do input do id "descricao"
    let descricaoHTML = document.getElementById("descricao");
    let descricao = descricaoHTML.value;
    // Obtenha o valor do input do id "valor"
    let valorHTML = document.getElementById("valor");
    let valor = -1;
    valor = parseFloat(valorHTML.value);
    // Obtenha o valor do input do id "date"
    let inputDateElement = document.getElementById("data");
    let valorDate = inputDateElement.value;
    validacao(valorSelecionado, descricao, valor, valorDate);
}
//faz uma validaçao dos campos  
function validacao(tipoSelecionado, descricao, valor, valorDate) {
    //Faz uma comparacao nos campos para ver se nao estao vazios ou indefinidos.
    if (tipoSelecionado !== undefined && descricao !== "" && valor >= 0 && valorDate !== "") {
        adicionarAoRegistro(tipoSelecionado, descricao, valor, valorDate);
    }
    else {
        if (tipoSelecionado == undefined) {
            alert("Erro voce fez algo que nao devia!! :)");
        }
        else if (descricao == "") {
            alert("Voce deve informar uma descrição!");
        }
        else if (valor <= -1) {
            alert("Voce deve informar um valor maior que 0!");
        }
        else if (valorDate == "") {
            alert("Voce deve informar uma data completa!");
        }
    }
}
//adciona as informacoes ao registro
function adicionarAoRegistro(tipo, descricao, valor, date) {
    //limpa os campos informados
    let descricaoHTML = document.getElementById("descricao");
    descricaoHTML.value = '';
    let valorHTML = document.getElementById("valor");
    valorHTML.value = '';
    let inputDateElement = document.getElementById("data");
    inputDateElement.value = '';
    //exibi no console as informacoes, logo mais guarda no registro em uma lista
    console.log(`O tipo é ${tipo}, Descrição: ${descricao} valor: ${valor} data: ${date}`);
}
