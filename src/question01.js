import leia from 'readline-sync';

var entregaNormal = 1.20;
var entregaExpressa = 1.80;
var entregaNoMesmoDia = 2.50;

var distanciaEntregaKm = leia.questionFloat("INFORME A DISTANCIA DA ENTREGA EM KM: ");
var valorEncomendaEmKm = leia.questionFloat("INFORME O VALOR DA ENCOMENDA EM KM: ");
var tipoDeEntrega = leia.keyInSelect(["NORMAL", "EXPRESSA", "NO MESMO DIA", "CANCELAR"], "INFORME O TIPO DE ENTREGA: ");

if(tipoDeEntrega === 0) {
    entregaNormal;
    console.log("ENTREGA NORMAL");
} if(tipoDeEntrega === 1) {
    entregaExpressa;
    console.log("ENTREGA EXPRESSA");
} if(tipoDeEntrega === 2){
    console.log("ENTREGA NO MESMO DIA");
} if(tipoDeEntrega === 3) {
    console.clear;
}

var taxaEncomenda = leia.questionFloat("INFORME A TAXA DA ENCOMENDA: ");

if(taxaEncomenda <= 5) {
    console.log("SEM TAXA ADICIONAL")
} if(taxaEncomenda <= 15) {
    console.log("TAXA ADICIONAL DE R$20.00");
} if(taxaEncomenda > 15) {
    console.log("TAXA ADICIONAL DE R$45.00");
}