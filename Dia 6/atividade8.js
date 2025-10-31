import readline from "readline-sync"

let saldo = 1000.0;

function menu(){
    console.log("Escolha a operação que deseja realizar: \n 1 | Saldo\n 2 | Saque\n 3 | Depósito");
    let escolha = readline.questionInt();

    switch (escolha){
        case 1:
            console.log(`Operação - Saldo\n Saldo: R$${saldo}`);
            break
        case 2:
            let saque = readline.questionFloat("Informe o valor que deseja sacar: R$");
            if(saque <= saldo){
                saldo -= saque;
                console.log(`Operação - Saque\n Novo Saldo: R$ ${saldo}`)
            }else{
                console.log(`Operação - Saque\n Saldo insuficiente!`)
            } 
            break

        case 3:
            let deposito = readline.questionFloat("Informe o valor que deseja depositar: R$");
            saldo += deposito;

            console.log(`Operação - Depósito\n Novo Saldo: R$ ${saldo}`)           
            break
        default:
            console.log("Operação Inválida!")
    }
}

function loop() {
    console.log("Escolha a operação que deseja realizar: \n 1 | Saldo\n 2 | Saque\n 3 | Depósito\n 4 sair");
    let escolha = readline.questionInt();

    switch (escolha){
        case 1:
            console.log(`Operação - Saldo\n Saldo: R$${saldo}`);
            break
        case 2:
            let saque = readline.questionFloat("Informe o valor que deseja sacar: R$");
            if(saque <= saldo){
                saldo -= saque;
                console.log(`Operação - Saque\n Novo Saldo: R$ ${saldo}`)
            }else{
                console.log(`Operação - Saque\n Saldo insuficiente!`)
            } 
            break

        case 3:
            let deposito = readline.questionFloat("Informe o valor que deseja depositar: R$");
            saldo += deposito;

            console.log(`Operação - Depósito\n Novo Saldo: R$ ${saldo}`)           
            break
        case 4:
            console.log("Operação Inválida!")
        //Estava fazendo a verção loop mas acabei parando para fazer as outras atividades.
    }
}

menu()



