import leia from 'readline-sync';

var qtdVendasRealizadas = leia.questionInt("DIGITE A QUANTIDADE DE VENDAS REALIZADAS: ");
var valorTotalVendasMes = leia.questionInt("DIGITE O VALOR TOTAL DAS VENDAS REALIZADAS NO MES: ");
var qtdComprasCanceladas = leia.questionInt("DIGITE A QUANTIDADE DE COMPRAS CANCELADAS DOS CLIENTES: ");
var notaMediaClientes = leia.questionFloat("DIGITE A NOTA MEDIA DOS CLIENTES ENTRE 0 ATE 10: ");

var comissao;

while(comissao) {
    if(comissao <= 5000.00) {
        console.log("COMISSAO DE 2%");
    } if(comissao > 5000.00 || comissao <= 15000.00) {
        console.log("COMISSAO DE 4%");
    } if(comissao > 15000.00) {
        console.log("COMISSAO DE 6%");
    }
}