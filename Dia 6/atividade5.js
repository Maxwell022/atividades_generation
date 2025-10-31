import readline from "readline-sync"

let total = 0.0;

function produtos(){
    console.log(`
        Código do Produto | Produto          | Preço Unitário
        -----------------------------------------------------
        1                 | Cachorro Quente  | R$ 10.00
        2                 | X-Salada         | R$ 15.00
        3                 | X-Bacon          | R$ 18.00
        4                 | Bauru            | R$ 12.00
        5                 | Refrigerante     | R$  8.00
        6                 | Suco de Laranja  | R$ 13.00
        `);

}

produtos();

let escolha = readline.questionInt("Diga o código do protudo desejado:")
let quantidade = readline.questionInt("Diga a quantidade do produto: ")

//Usar uma matriz com os codigos, produtos e valores

switch (escolha){
    case 1:
        total = quantidade * 10.00;
        console.log(`Produto: Cachorro Quente\nValor total: R$ ${total}`)  
        break;
    case 2:
        total = quantidade * 15.00;
        console.log(`Produto: X-Salada\nValor total: R$ ${total}`)  
        break;
    case 3:
        total = quantidade * 18.00;
        console.log(`Produto: X-Bacon\nValor total: R$ ${total}`)  
        break;
    case 4:
        total = quantidade * 12.00;
        console.log(`Produto: Bauru\nValor total: R$ ${total}`)  
        break;
    case 5:
        total = quantidade * 8.00;
        console.log(`Produto: Refrigerante\nValor total: R$ ${total}`)  
        break;
    case 6:
        total = quantidade * 13.00;
        console.log(`Produto: Suco de laranja\nValor total: R$ ${total}`)  
        break;
    default:
        console.log("Opção invalidada")
    
}