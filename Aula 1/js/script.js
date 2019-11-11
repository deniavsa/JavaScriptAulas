//Declarar variaveis

var length = 21;//numeros
var sobrenome = "Santos";//String
var carros = ["Saab", "Volvo", "BMW"];//Array
var x = { primeironome: "Denilson", ultimonome: "Santos" };//Objeto

//Função
function soma(numero1, numero2) {
    return numero1 + numero2;
}

soma(1, 2); //Usar uma função

//invocando uma função antes de definir
soma(1, 3);
function soma(numero1, numero2) {
    return numero1 + numero2;
}

// 

var nomeUsuario = "Denilson";

var mensagem = "";


if (nomeUsuario == " Denilso") {

    mensagem = "Nome igual";

} else {
    mensagem = " Nome diferente";
}

document.write(mensagem);//

document.bgColor = "green";//

//exemplo  de while com DOM manipulation
count = 0;
while(count <=10){
    document.write(count);
    count++;
}


