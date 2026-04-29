const btnzecapagodao = document.getElementById("btnzecapagodao");
const alimento = document.getElementById("alimento")

const estados = {
    normal: "img/zecapagodao.png",
    puto: "img/zecaputo.png",
    comendo: "img/zecacomendo.png",
    alimentado: "img/zecapagodao.png",
    morto: "img/criaturaDeath.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 10){
                btnzecapagodao.src = estados.puto;
            }

            if(contador == 20){
                btnzecapagodao.src = estados.morto;
            }
        }, 1000);
}

function alimentar(){
    btnzecapagodao.src = estados.comendo;
    contador = 0;
    console.log("comendo")

    if(time_cick) clearInterval(time_click)
        time_click = setTimeout(()=>{
           btnzecapagodao.src = estados.alimentado;

           time_out = setTimeout(()=>{
            btnzecapagodao.src = estados.normal;
        }, 2000); 
        }, 1000);
        
}

controlador();