    let botao = document.getElementById("calcular");

        botao.addEventListener("click", function(){

            let valorPacote = Number(document.getElementById("pacote").value);

            let pessoas = Number(document.getElementById("pessoas").value);

            let custoBruto = valorPacote * pessoas;

            let taxaServico = custoBruto * 0.10;

            let subtotal = custoBruto + taxaServico;

            let desconto = 0;

            if(pessoas > 100){
                desconto = subtotal * 0.05;
            }

            let totalFinal = subtotal - desconto;

            let resultado = document.getElementById("resultado");

            resultado.innerHTML =

            "<strong>Resumo do Orçamento</strong><br><br>" +

            "Custo Bruto: R$ " + custoBruto.toFixed(2) + "<br>" +

            "Taxa de Serviço (10%): R$ " + taxaServico.toFixed(2) + "<br>" +

            "Desconto Aplicado: R$ " + desconto.toFixed(2) + "<br>" +

            "Total Final: R$ " + totalFinal.toFixed(2);

        });
