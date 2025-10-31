import readline from "readline-sync"

let number1, number2, number3;

number1 = readline.questionInt("Digiteo primeiro número: ");
number2 = readline.questionInt("Digiteo segundo número: ");
number3 = readline.questionInt("Digiteo terceiro número: ");

if(number1 + number2 > number3){
    console.log("A soma do número 1 e número 2 é maior que o número 3");
}else if(number1 + number2 < number3){
    console.log("A soma do número 1 e número 2 é menor que o número 3");
}else{
    console.log("A soma do número 1 e número 2 é igual ao número 3");
}