import readline from "readline-sync"
let notas = [];
let soma = 0.0;

for(let i=0; i < 4; i++){
    let nota = readline.questionFloat(`Digite a nota ${i + 1}: `)
    notas.push(nota);
    soma += nota
}

let media = soma / notas.length

console.log(`Média final: ${media.toFixed(1)}`)