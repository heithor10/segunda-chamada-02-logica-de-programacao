import leia from 'readline-sync';

var qtdDePessoas = leia.questionInt("DIGITE A QUANTIDADE DE PESSOAS: ");
var qtdDiasViagem = leia.questionInt("DIGITE A QUANTIDADE DE DIAS DA VIAGEM: ");
var destinoEscolhido = leia.keyInSelect(["NACIONAL", "AMERICA DO SUL", "INTERNACIONAL"], "DIGITE O DESTINO ESCOLHIDO");
var seguroViagem = leia.keyInYN(["SIM", "NAO"], "DIGITE A ESCOLHA DO CLIENTE");

var valorDiarioPessoas = nacional = 180.00, americaDoSul = 320.00, internacional = 550.00;

if(destinoEscolhido === 0){
    nacional;
    console.log("O DESTINO SERA NACIONAL!!!");
}if(destinoEscolhido === 1) {
    americaDoSul;
    console.log("O DESTINO SERA AMERICA DO SUL!!!");
}if(destinoEscolhido === 2) {
    internacional;
    console.log("O DESTINO SERA INTERNACIONAL!!!");
}

