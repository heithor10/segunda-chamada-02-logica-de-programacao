import leia from 'readline-sync';

var DiasPagamentoAtrasado = leia.questionInt("INFORME A QUANTIDADE DE DIAS DE PAGAMENTOS ATRASADOS DOS ALUNOS: ");
var treinosRealizadosNoMes = leia.questionInt("INFORME A QUANTIDADE DE TREINOS REALIZADOS DURANTE O MES: ");
var tiposDePlanos = leia.keyInSelect(["BASICO", "INTERMEDIARIO", "PREMIUM"], "INDIQUE O TIPO DE PLANO: ");

var multa;

var planoBasico = 80.00;
var planoIntermediario = 120.00;
var planoPremium = 180.00;

if(tiposDePlanos === 0) {
    planoBasico
    console.log("O PLANO E BASICO!");
} if(tiposDePlanos === 1) {
    planoIntermediario
    console.log("O PLANO E INTERMEDIARIO!!");
} if(tiposDePlanos === 2) {
    planoPremium
    console.log("PLANO PREMIUM!!!");
} if(tiposDePlanos === 3) {
    console.clear();
}

if(DiasPagamentoAtrasado === 0) {
    console.log("NAO TEM MULTA!!!");

}if(DiasPagamentoAtrasado <= 5) {
    multa = ( tiposDePlanos * 0.2).toFixed(2);
    console.log("MULTA DE 2%");

 }if(DiasPagamentoAtrasado > 5 || DiasPagamentoAtrasado <= 15) {
    multa = (tiposDePlanos * 0.5).toFixed(2);
    console.log("MULTA DE 5%");
    

 }if(DiasPagamentoAtrasado > 15) {
    multa = (tiposDePlanos * 1.0).toFixed(2);
    console.log("ACESSO BLOQUEADO!!!");

 }