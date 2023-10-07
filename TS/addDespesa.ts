function adicionarAoRegistro() {
    // Obtenha uma coleção de todos os inputs do tipo rádio com o mesmo name
    let radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="tipo"]') as NodeListOf<HTMLInputElement>;
    let valorSelecionado:string = "";

    // Faz uma busca sobre os inputs do tipo rádio para encontrar o selecionado
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            valorSelecionado = radioButton.value;
            break;
        }
    }
    // Obtenha o valor do input do id "descricao"
    let descricaoHTML: HTMLInputElement = document.getElementById("descricao") as HTMLInputElement;
    let descricao:string = descricaoHTML.value;
    // Obtenha o valor do input do id "valor"
    let valorHTML = document.getElementById("valor") as HTMLInputElement;
    let valor:number = parseFloat(valorHTML.value);

    // Obtenha o valor do input do id "date"
    let inputDateElement: HTMLInputElement = document.getElementById("data") as HTMLInputElement; 
    let valorDate:string = inputDateElement.value;

    console.log(`O tipo é ${valorSelecionado}, Descrição: ${descricao} valor: ${valor} data: ${valorDate}`)
}