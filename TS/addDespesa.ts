// Definição de um enum chamado tipos que contém tipos de despesas
const enum tipos {
    Lanches = "Lanches",
    Livros = "Livros",
    Transporte = "Transporte",
    Material_didático = "Material didático"
};

// Mapeamento do enum tipos para um objeto que mapeia os valores dos enums para si mesmos
const tiposMap: { [key: string]: tipos } = {
    "Lanches": tipos.Lanches,
    "Livros": tipos.Livros,
    "Transporte": tipos.Transporte,
    "Material didático": tipos.Material_didático,
};

// Função para cadastrar despesas
function cadastrarDespesas() {
    // Obtém uma coleção de todos os inputs do tipo rádio com o mesmo name
    let radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="tipo"]') as NodeListOf<HTMLInputElement>;
    let valorSelecionado: string = "";
    let tipoSelecionado: tipos | undefined = undefined;

    // Faz uma busca nos inputs do tipo rádio para encontrar o selecionado
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            valorSelecionado = radioButton.value;
            tipoSelecionado = tiposMap[valorSelecionado];
            break;
        };
    };

    // Obtém o valor do input com o id "descricao"
    let descricaoHTML: HTMLInputElement = document.getElementById("descricao") as HTMLInputElement;
    let descricao: string = descricaoHTML.value;

    // Obtém o valor do input com o id "valor"
    let valorHTML = document.getElementById("valor") as HTMLInputElement;
    let valor: number = -1;
    valor = parseFloat(valorHTML.value);

    // Obtém o valor do input com o id "data"
    let inputDateElement: HTMLInputElement = document.getElementById("data") as HTMLInputElement;
    let valorDate: string = inputDateElement.value;

    // Chama a função de validação com os valores obtidos
    validacao(valorSelecionado, descricao, valor, valorDate);
};

// Função de validação dos campos
function validacao(tipoSelecionado: string, descricao: string, valor: number, valorDate: string) {
    // Faz uma comparação nos campos para verificar se não estão vazios ou indefinidos
    if (tipoSelecionado !== undefined && descricao !== "" && valor >= 0 && valorDate !== "") {
        // Se os campos estiverem preenchidos corretamente, chama a função para adicionar ao registro
        adicionarAoRegistro(tipoSelecionado, descricao, valor, valorDate);
    } else {
        // Caso contrário, exibe alertas de erro com base nos campos faltantes ou inválidos
        if (tipoSelecionado == undefined) {
            alert("Erro, você fez algo que não devia! :)");
        } else if (descricao == "") {
            alert("Você deve informar uma descrição!");
        } else if (valor <= -1) {
            alert("Você deve informar um valor maior que 0!");
        } else if (valorDate == "") {
            alert("Você deve informar uma data completa!");
        };
    };
};

// Função para adicionar as informações ao registro
function adicionarAoRegistro(tipo: string, descricao: string, valor: number, date: string) {
    // Limpa os campos informados
    let descricaoHTML: HTMLInputElement = document.getElementById("descricao") as HTMLInputElement;
    descricaoHTML.value = '';

    let valorHTML = document.getElementById("valor") as HTMLInputElement;
    valorHTML.value = '';

    let inputDateElement: HTMLInputElement = document.getElementById("data") as HTMLInputElement;
    inputDateElement.value = '';

    // Exibe no console as informações e alerta ao usuário
    console.log(`tipo: ${tipo}, Descrição: ${descricao}, valor: ${valor}, data: ${date}`);
    alert(`tipo: ${tipo}, Descrição: ${descricao}, valor: ${valor}, data: ${date}`);
};
