// For
// While
// Do While
// For in
// For of



// FOR:

// for(let i = 0; i < 7; i++){
//     if(i % 2 !== 0){
//         console.log('Estou aprendendo!', i);
//     }
// }



// WHILE

// let i = 5;

// while(i >= 1){
//     if(i % 2 !==0){
//         console.log(i);
//     }
//     i--
// }



// DO WHILE

// let i = 0;

// do {
//     console.log("digitando! ", i);
//     i++
// } while(i <10)



// FOR IN

// const pessoa = {
//     nome: 'Jhonatan',
//     idade: 25
// };
// //key-value
// for(let chave in pessoa){
//     console.log(`${chave} = ${pessoa[chave]}`);
// }

// const cores = ['vermelho', 'verde', 'azul'];

// for (let indice in cores){
//     console.log(cores[indice]);
// }


 
// FOR OF

const cores = ['vermelho', 'verde', 'azul'];

for (let cor of cores){
    console.log(cor); // Mesmo resultado do FOR IN de forma mais simples
}