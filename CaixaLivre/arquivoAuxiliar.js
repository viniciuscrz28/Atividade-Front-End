const produtos = {
	"123": {"nome": "Gol contra do Brasil", "preco": 9.99},
	"456": {"nome": "Gol contra do Brasil", "preco": 9.99},
	"789": {"nome": "Gol da Croacia	     ", "preco": 9.99}

}

let carrinho= [];
const audio = new Audio(bip.mp3);
window.onload = () => {
document.getElementById("cod").focus();
}

function addProduto(){
	const codInput = document.getElementById("cod");
	cont qtd = document.getElementById("qtd");

	let valorCod = codInput.value;
	let valorQtd = parseInt(qtd.value);

	if(!produtos[valorCod]){
		alertItem();
		return
	}

	const produtoBase = produtos[valorCod];

	const item ={
		nome: produtoBase.nome,
		preco: produtoBase.preco,
		qdtItem: valorQtd,
		subTot: produtoBase.preco*valorQtd
	}
	
	carrinho.push(item);
	audio.play();

	console.log;

	atualizaTela();

	codInput.value = "";


	function atualizarTela(){
		const lista = document.getElementById("lista");
		lista.innerHTML= "";
		let total = 0;
 		
		carrinho.forEach((item, index) => {
			total += item.subTot
			const li = document.creeateElement("li");
			li.className = "list-group-name";

			li.innerHTML = '<div class="d-flex"><strong>${}</strong></div>'
		})

	}
}


