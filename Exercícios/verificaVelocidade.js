// Limite = 70, 70> c/5 + 1 ponto

let velocidade = 79;

function verificarVelocidade(vel){
    if (vel <75)
        return 'Velocidade permitida'
    let contador = 0;
    while (vel >= 75){
        vel -= 5;
        contador += 1;
    }
    return contador
}

console.log(verificarVelocidade(velocidade))