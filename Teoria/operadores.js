// Operadores Aritméticos
// Operadores Atribuição
// Operadores Comparação
// Operadores Lógicos
// Operadores Bitwise


// Aritméticos:


let salario = 100;

// + , - , * , / , **

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

// ++ --

console.log(++salario); // adiciona 1 e em seguida mostra o resultado
salario = 100;
console.log(--salario); // subtrai 1 e em seguida mostra o resultado


// Atribuição:


let valorTecladoGamer = 300;
console.log("O valor é: " + valorTecladoGamer);
valorTecladoGamer += valorTecladoGamer; // += , -= , *= , /= servem também


// Comparação / Igualdade:
// Igualdade estrita
console.log (1 === 1); // compara valores e tipo
console.log ('1' === 1); // False

// Igualdade solta
console.log (1 == 1); // True
console.log ('1' == 1); 


// Ternário: 

// Se o cliente tiver mais de 100 pontos = premium.
let pontos = 101;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);


// Lógicos:


// and (&&), or (||), not

// and (&&), retorna TRUE se AMBOS operandos forem TRUE
console.log(`Tem que retornar TRUE:  ${true && true}`); // retorna TRUE
console.log(`Tem que retornar FALSE: ${false && true}`); // retorna FALSE

// or (||), retorna TRUE se UM dos operandos for TRUE
console.log(`Tem que retornar TRUE: ${true || true}`); // retorna TRUE
console.log(`Tem que retornar TRUE: ${false || true}`); // retorna TRUE
console.log(`Tem que retornar FALSE: ${false || false}`); // retorna FALSE

// not (!), retorna TRUE se FALSE e FALSE se TRUE
console.log( 'Tem que retornar FALSE: ' + !true); // retorna FALSE
console.log( 'Tem que retornar TRUE: ' + !false); // retorna TRUE


// Lógicos não-booleanos: 


// teste de commit 