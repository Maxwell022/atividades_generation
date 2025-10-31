import readline from "readline-sync"

let numero = readline.questionInt("Digite um número: ")

if (numero > 0 && numero % 2 === 0) {
  console.log(`O númmero ${numero} é par e positivo!`)
} else if (numero > 0 && numero % 2 !== 0) {
  console.log(`O númmero ${numero} é impar e positivo!`)
} else if (numero < 0 && numero % 2 === 0) {
  console.log(`O númmero ${numero} é par e negativo!`)
} else if (numero < 0 && numero % 2 !== 0) {
  console.log(`O númmero ${numero} é impar e negativo!`)
} else {
  console.log("O número é zero")
}