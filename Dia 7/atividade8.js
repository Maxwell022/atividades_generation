import readline from "readline-sync"

const vetor = [2,5,1,3,4,9,7,8,10,6]
let pesquisa = 0;
let achado = false

pesquisa = readline.questionInt("Digite o numero que voce deseja encontrar: ")

for(let i = 0; i < vetor.length; i++){
    if(pesquisa === vetor[i]){
        console.log(`O número ${pesquisa} está localizado na posição: ${i}`)
        achado = true
        break
    }
}
if(achado == false){
    console.log(`O número ${pesquisa} não foi encontrado!`)
}