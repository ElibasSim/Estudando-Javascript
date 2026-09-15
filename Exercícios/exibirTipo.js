// Recebe uma quantidade de variavel e informa se cada valor é impar ou par

let quantidade = 10;

function exibirTipo(qtd){
    let contador = 0
    while (contador < qtd){ 
        if (contador % 2 == 0){
            console.log(`${contador} Par`)
        }
        else {
            console.log(`${contador} Impar`)
        }
        
        contador += 1;
    }
}

console.log(exibirTipo(quantidade))