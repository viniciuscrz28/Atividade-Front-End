
document.getElementById("analisar").addEventListener("click", analisarCartao);

function analisarCartao(){

    let numero =
    document.getElementById("cartao")
    .value
    .replace(/\D/g,"");

    let resultado =
    document.getElementById("resultado");

    if(numero.length < 13 || numero.length > 16){

        resultado.innerHTML =
        "<span class='invalido'>Número inválido.</span>";

        return;
    }

    let valido = validarLuhn(numero);

    let bandeira = identificarBandeira(numero);

    let setor = identificarSetor(numero);

    let banco = identificarBanco(numero);

    resultado.innerHTML =

    "<strong>Painel de Informações</strong><br><br>" +

    "Status: <span class='" +
    (valido ? "valido" : "invalido") +
    "'>" +
    (valido ? "Válido" : "Inválido") +
    "</span><br>" +

    "Bandeira: " + bandeira + "<br>" +

    "Categoria de Setor: " + setor + "<br>" +

    "Banco Emissor: " + banco;

}

function validarLuhn(numero){

    let soma = 0;
    let dobrar = false;

    for(let i = numero.length - 1; i >= 0; i--){

        let digito = Number(numero[i]);

        if(dobrar){

            digito *= 2;

            if(digito > 9){
                digito -= 9;
            }
        }

        soma += digito;

        dobrar = !dobrar;
    }

    return soma % 10 === 0;
}

function identificarBandeira(numero){

    if(numero.startsWith("4")){
        return "Visa";
    }

    if(
        numero.startsWith("51") ||
        numero.startsWith("52") ||
        numero.startsWith("53") ||
        numero.startsWith("54") ||
        numero.startsWith("55")
    ){
        return "Mastercard";
    }

    if(numero.startsWith("34") || numero.startsWith("37")){
        return "American Express";
    }

    return "Não identificada";
}

function identificarSetor(numero){

    let primeiroDigito = numero[0];

    switch(primeiroDigito){

        case "3":
            return "Viagens e Entretenimento";

        case "4":
        case "5":
            return "Instituições Financeiras";

        case "6":
            return "Comércio e Bancos";

        default:
            return "Setor Desconhecido";
    }
}

function identificarBanco(numero){

    if(numero.startsWith("4011")){
        return "Banco Exemplo Visa";
    }

    if(numero.startsWith("5500")){
        return "Banco Exemplo Master";
    }

    if(numero.startsWith("3400")){
        return "Banco Exemplo Amex";
    }

    return "Banco não identificado";
}
