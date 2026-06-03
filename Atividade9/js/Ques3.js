        let botao = document.getElementById("calcular");

        botao.addEventListener("click", function(){

            let nome = document.getElementById("nome").value;

            let nota1 = Number(document.getElementById("nota1").value);
            let nota2 = Number(document.getElementById("nota2").value);
            let nota3 = Number(document.getElementById("nota3").value);

            let media = (nota1 + nota2 + nota3) / 3;

            let resultado = document.getElementById("resultado");

            if(media >= 7){

                resultado.innerHTML =
                nome + " foi APROVADO!<br>Média: " + media.toFixed(2);

                resultado.className = "aprovado";

            }
            else if(media >= 4){

                let falta = 10 - media;

                resultado.innerHTML =
                nome + " está em EXAME!<br>Média: " + media.toFixed(2) +
                "<br>Faltam " + falta.toFixed(2) + " pontos para chegar em 10.";

                resultado.className = "exame";

            }
            else{

                resultado.innerHTML =
                nome + " foi REPROVADO!<br>Média: " + media.toFixed(2);

                resultado.className = "reprovado";
            }

        });
