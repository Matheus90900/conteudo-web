
let qtdCliques = 0;
let segundos = 0;
let cliquesPorMinutos 

function handleClick(){
    qtdCliques += 1;
    let elementoQtdCliques = document.getElementById("quantidade-cliques");
    elementoQtdCliques.innerText = qtdCliques;
}

window.onload = ()=>{
    cronometro();
}

function cronometro(){
    setTimeout(()=>{

        segundos += 1;

        let elementoCronometro = document.getElementById("cronometro")
        elementoCronometro.innerText = segundos;

        calculaCliquesPorMinutos()

        cronometro();
    },1000)
}

function calculaCliquesPorMinutos(){
    cliquesPorMinutos = (qtdCliques / (segundos / 60)).toFixed();

    let elementosCliquesPorMinuto = document.getElementById("cpm")
    elementosCliquesPorMinuto.innerText = cliquesPorMinutos;

}