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

// var nomeUsuario = "Denilson";

// var mensagem = "";


// if (nomeUsuario == " Denilso") {

//     mensagem = "Nome igual";

// } else {
//     mensagem = " Nome diferente";
// }

// document.write(mensagem);//

// document.bgColor = "green";//

// //exemplo  de while com DOM manipulation
// count = 0;//iniciando variavel tipo number
// while(count <=10){
//     document.write(count);
//     count++;
// }
// //exemplo  de  do-while com DOM manipulation
// count = 0;// iniciando variavel tipo number

// do{
//     document.write(count);
//     count++;
// }while(count <= 5);

// for com DOM

// for (var i = 0; i <= 10; i++) {
//     document.write("Denilson");
// }

// var carro1 = "Volvo";
// var corC1 = "red";

// var carro2 = "Gol";
// var corC2 = "Verde";

// document.write(carro1, corC1);
// documento.bgColor = corC1;
// document.write(carro2, corC2);
// documento.bgColor = corC2;

console.log("Carros Disponiveis : Volvo na cor vermelha e gol na cor verde");

let carro = prompt("Digite o Carro 1");
let corC = prompt("Digite a cor do carro");

if (carro == "volvo" && corC == "red") {
    document.write("Volvo na cor vermelha");
    documento.bgColor = "corC";
} else {
    document.write("Gol na cor verde");
    documento.bgColor = "corC";
}



