const produtos = {
	"123": {"nome": "FT450 c/ chicote", "preco": 4153.00},
	"456": {"nome": "Kit Turbo Ap 2.0 8v + Turbo R4449", "preco": 5383.00},
	"789": {"nome": "Kit Suspensão Rosca Sport Vw Gol", "preco": 1797}

}

let carrinho= [];
const audio = new Audio("bip.mp3");
window.onload = () => {
document.getElementById("cod").focus();
}

function addProduto(){
	const codInput = document.getElementById("cod");
	const qtd = document.getElementById("qtd");

	let valorCod = codInput.value;
	let valorQtd = parseInt(qtd.value);

	if(!produtos[valorCod]){
		alertItem();
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

	console.log(item);

	atualizarTela();

	codInput.value = "";


	function atualizarTela(){
		const lista = document.getElementById("lista");
		lista.innerHTML= "";
		let total = 0;
 		
		carrinho.forEach((item, index) => {
			total += item.subTot;
			const li = document.createElement("li");
			li.className = "list-group-name";

		
		})

	}
}


