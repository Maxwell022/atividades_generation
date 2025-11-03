import readline from "readline-sync"

let number = 0, pares = 0, impares = 0;

for(let i = 1; i <=10; i++){
    number = readline.questionInt(`Digite o numero ${i}: `)
    if(number % 2 === 0){
        pares++
    }else{
        impares++
    }
}
console.log(`Total de números pares: ${pares}\nTotal de números impares: ${impares}`)