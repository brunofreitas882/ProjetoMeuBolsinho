"use strict";
function adicionarAoRegistro() {
    // Obtenha uma coleção de todos os inputs do tipo rádio com o mesmo name
    let radioButtons = document.querySelectorAll('input[name="tipo"]');
    let valorSelecionado = "";
    // Faz uma busca sobre os inputs do tipo rádio para encontrar o selecionado
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            valorSelecionado = radioButton.value;
            break;
        }
    }
    // Obtenha o valor do input do id "descricao"
    let descricaoHTML = document.getElementById("descricao");
    let descricao = descricaoHTML.value;
    // Obtenha o valor do input do id "valor"
    let valorHTML = document.getElementById("valor");
    let valor = parseFloat(valorHTML.value);
    // Obtenha o valor do input do id "date"
    let inputDateElement = document.getElementById("data");
    let valorDate = inputDateElement.value;
    console.log(`O tipo é ${valorSelecionado}, Descrição: ${descricao} valor: ${valor} data: ${valorDate}`);
}
