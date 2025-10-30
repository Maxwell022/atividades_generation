import readline from "readline-sync"

let bruto = 0.0;
let adc = 0.0;
let ex = 0.0;
let des = 0.0;

bruto = readline.questionFloat("Digite o salário bruto: ")
adc = readline.questionFloat("Digite o adicional noturno: ")
ex = readline.questionFloat("Digite a quantidade de horas extras: ")
des = readline.questionFloat("Digite o valor dos descontos: ")

let liq = bruto + adc + (ex * 5) - des

console.log(`Salário Líquido: ${liq.toFixed(2)}`)