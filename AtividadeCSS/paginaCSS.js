function mensagem(){

    const idade = 19;
    const a = 1;
    const b = 2; 
    console.log();
};

class carro {
    Marca = "BMW";
    Modelo = "M3";
    Caracteristicas = ["Fire Orange Coupe"];
    // exibirDetalhes = function(){
    //     alert("Marca:" + this.Marca + " - MOdelo: " + this.Modelo);
    // }
}
carro.exibirDetalhes = function(){
    alert("Marca: " + this.Marca + "Modelo:" + this.Modelo);
}

