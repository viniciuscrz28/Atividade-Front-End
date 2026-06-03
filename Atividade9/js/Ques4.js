 let botao = document.getElementById("calcular");

        botao.addEventListener("click", function(){

            let bandeira = document.getElementById("bandeira").value;

            let valor = Number(document.getElementById("valor").value);

            let parcelas = Number(document.getElementById("parcelas").value);

            let taxaBandeira = 0;

            // Verifica a bandeira
            switch(bandeira){

                case "visa":
                    taxaBandeira = valor * 0.02;
                    break;

                case "master":
                    taxaBandeira = valor * 0.0185;
                    break;

                case "elo":
                    taxaBandeira = valor * 0.03;
                    break;
            }

            // Juros simples
            let juros = valor * (0.015 * parcelas);

            // Taxa mensal fixa
            let taxaMensal = parcelas * 12.50;

            // Valor total
            let valorTotal = valor + taxaBandeira + juros + taxaMensal;

            // Valor da parcela
            let valorParcela = valorTotal / parcelas;

            let resultado = document.getElementById("resultado");

            resultado.innerHTML =

            "<strong>Resumo da Venda</strong><br><br>" +

            "Valor da Venda: R$ " + valor.toFixed(2) + "<br>" +

            "Taxa da Bandeira: R$ " + taxaBandeira.toFixed(2) + "<br>" +

            "Juros Totais: R$ " + juros.toFixed(2) + "<br>" +

            "Taxa Mensal: R$ " + taxaMensal.toFixed(2) + "<br>" +

            "Valor Total: R$ " + valorTotal.toFixed(2) + "<br>" +

            "Valor por Parcela: R$ " + valorParcela.toFixed(2);

        });

$('#number').mask('R$000.000.000.000.000.000');