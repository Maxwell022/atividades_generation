import readline from "readline-sync"

let n1 = 0.0;
let n2 = 0.0;
let n3 = 0;
let n4 = 0;


n1 = readline.questionFloat(`Digite o número 1: `)
n2 = readline.questionFloat(`Digite o número 2: `)
n3 = readline.questionFloat(`Digite o número 3: `)
n4 = readline.questionFloat(`Digite o número 4: `)

let resul = (n1 * n2) - (n3 * n4)

console.log(`Diferença: ${resul.toFixed(1)}`)