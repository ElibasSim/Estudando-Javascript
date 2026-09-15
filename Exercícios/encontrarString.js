// Criar uma função pra ler propriedades de um objeto e
// exibir propriedades do tipo string dentro do objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

function encontrarString(filme){
    for (let chave in filme){
        if ( typeof filme[chave] === "string"){
            console.log(`${chave} ${filme[chave]}`);
        }
    }
}

encontrarString(filme)