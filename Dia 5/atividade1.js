import readline from "readline-sync"

let salario = 0.0;
let abono = 0;

salario = readline.questionFloat("Digite o Salário: ")
abono = readline.questionFloat("Digite o abono: ")

salario += abono
console.log(`Novo Salário: ${salario}`)