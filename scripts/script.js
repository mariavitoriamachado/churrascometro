// Carne - 400/200 gr por pessoa  + de 6 horas - 650/325
// Cerveja - 1200/600 ml por Pessoa + 6 horas - 2000/1000 ml
// Refrigerante/agua - 1000/500 ml por pessoa + 6 horas 1500/750 ml
// 1 lata de cerveja tem 375 ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calcular...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * criancas);
    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${quantidadeTotalCarne / 1000}kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja / 355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas / 2000)} garrafas de bedida</p>`
} 

function carnePorPessoa(duracao) {
    if(duracao >= 6) {
        return 650;
    }
        return 400;
}

function cervejaPorPessoa(duracao) {
    if(duracao >= 6) {
        return 2000;
    }
        return 1200;
}

function bebidasPorPessoa(duracao) {
    if(duracao >= 6) {
        return 1500;
    }
        return 1000;
}









