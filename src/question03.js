import leia from 'readline-sync';

var qtdDeKwh = leia.questionFloat("INFORME A QUANTIDADE DE QUILOWATT USADO POR HR: ");
var tipoDeImovel = leia.keyInSelect(["RESIDENCIAL", "COMERCIAL"], "INFORME QUAL TIPO DE IMOVEL ");
var contaPagaNoPrazo = leia.keyInYN(["SIM", "NAO"], "INFIRME SE ESTA SENDO PAGA NO PRAZO ");

var taxaFixa = leia.questionFloat("DIGITE O VALOR DA TAXA FIXA: R$");

if(tipoDeImovel === 0) {
    console.log("RESIDENCIAL!!");
}if(tipoDeImovel === 1) {
    console.log("COMERCIAL!!");
}if(tipoDeImovel === 2) {
    console.clear();
}

if(contaPagaNoPrazo === y) {
    console.log("SIM!!");
}if(contaPagaNoPrazo === n) {
    console.log("NAO!!!");
}

while(tipoDeImovel === residencial){
if(qtdDeKwh <= 100) {
    console.log("R$ 0.65 POR KWH");
}
if(qtdDeKwh > 100 || qtdDeKwh <= 250) {
    console.log("R$ 0.80 POR KWH");
}
if(qtdDeKwh > 250) {
    console.log("R$ 1.10 KWH");
}
}
while(tipoDeImovel === comercial) {
    if(qtdDeKwh <= 200) {
        console.log("R$ 0.90 POR KWH");
    }
    if(qtdDeKwh > 200){
        console.log("R$ 1.10 POR KWH");
    }
 }

 while(taxaFixa) {
    taxaFixa = residencial;
    residencial = 18.00;

    taxaFixa = comercial;
    comercial = 35.00;
 }
 