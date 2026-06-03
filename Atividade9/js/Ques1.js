function validarCPF(){

            let cpf = document.getElementById("cpf").value;

            // Remove pontos e traços
            cpf = cpf.replace(/\D/g, "");

            let resultado = document.getElementById("resultado");

            // Verifica tamanho
            if(cpf.length != 11){
                resultado.innerHTML = "CPF inválido!";
                resultado.className = "invalido";
                return;
            }

            // Evita CPF com todos números iguais
            if(/^(\d)\1+$/.test(cpf)){
                resultado.innerHTML = "CPF inválido!";
                resultado.className = "invalido";
                return;
            }

            // Primeiro dígito
            let soma = 0;

            for(let i = 0; i < 9; i++){
                soma += parseInt(cpf.charAt(i)) * (10 - i);
            }

            let digito1 = (soma * 10) % 11;

            if(digito1 == 10){
                digito1 = 0;
            }

            // Segundo dígito
            soma = 0;

            for(let i = 0; i < 10; i++){
                soma += parseInt(cpf.charAt(i)) * (11 - i);
            }

            let digito2 = (soma * 10) % 11;

            if(digito2 == 10){
                digito2 = 0;
            }

            // Validação final
            if(digito1 == parseInt(cpf.charAt(9)) &&
               digito2 == parseInt(cpf.charAt(10))){

                resultado.innerHTML = "CPF válido!";
                resultado.className = "valido";

            }else{

                resultado.innerHTML = "CPF inválido!";
                resultado.className = "invalido";
            }
        }
