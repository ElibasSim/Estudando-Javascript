// IF - ELSE

// Se a hora estiver entre 06h-12h = bom dia!
//                         12h-18h = boa tarde!
//                  Caso contrário = boa noite!

// Exemplo prático:

let hora = 10;

if (hora >= 6 && hora < 12){
    console.log("bom dia!");
}
else if(hora >= 12 && hora < 18){
    console.log("boa tarde!");
}
else {
    console.log("boa noite!");
}

// SWITCH - CASE

// Lidando com usuarios de diferentes niveis:
//      | comum | gerente | diretor |

// Exemplo prático:

let permissao;

permissao = '';

switch (permissao){
    case 'comum':
    console.log('usuario comum');
    brake;

    case 'premium':
    console.log('usuario premium');
    brake;

    case 'diretor':
    console.log('usuario diretor');
    brake;

    default:
    console.log('Usuario não reconhecido!');
}
