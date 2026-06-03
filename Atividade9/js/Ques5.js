        let convidados = [];

        let botaoAdicionar = document.getElementById("adicionar");

        botaoAdicionar.addEventListener("click", adicionarConvidado);

        function adicionarConvidado(){

            let input = document.getElementById("nome");

            let nome = input.value.trim();

            if(nome == ""){
                alert("Digite um nome válido!");
                return;
            }

            convidados.push(nome);

            atualizarLista();

            input.value = "";
        }

        function atualizarLista(){

            let lista = document.getElementById("lista");

            lista.innerHTML = "";

            convidados.forEach(function(convidado, index){

                let item = document.createElement("li");

                let span = document.createElement("span");

                span.textContent = convidado;

                // Área dos botões
                let areaBotoes = document.createElement("div");

                areaBotoes.classList.add("acoes");

                // Botão concluir
                let btnConcluir = document.createElement("button");

                btnConcluir.textContent = "Concluir";

                btnConcluir.classList.add("btn-concluir");

                btnConcluir.addEventListener("click", function(){

                    span.classList.toggle("riscado");

                });

                // Botão editar
                let btnEditar = document.createElement("button");

                btnEditar.textContent = "Editar";

                btnEditar.classList.add("btn-editar");

                btnEditar.addEventListener("click", function(){

                    let novoNome = prompt("Digite o novo nome:");

                    if(novoNome != null && novoNome.trim() != ""){

                        convidados[index] = novoNome;

                        atualizarLista();
                    }

                });

                // Botão excluir
                let btnExcluir = document.createElement("button");

                btnExcluir.textContent = "Excluir";

                btnExcluir.classList.add("btn-excluir");

                btnExcluir.addEventListener("click", function(){

                    convidados.splice(index, 1);

                    atualizarLista();

                });

                areaBotoes.appendChild(btnConcluir);

                areaBotoes.appendChild(btnEditar);

                areaBotoes.appendChild(btnExcluir);

                item.appendChild(span);

                item.appendChild(areaBotoes);

                lista.appendChild(item);

            });

        }
