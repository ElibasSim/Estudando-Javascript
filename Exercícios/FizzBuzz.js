// Divisivel por =
// 3 = fizz
// 5 = buzz
// 3 && 5 = fizzbuzz
// não divisel por 3 || 5 = proprio numero

let exemplo = (3);

function fizzBuzz(n1){
    if ( typeof n1 !== "number")
        return 'Não é um número'
    else if (n1 % 3 == 0 && n1 % 5 == 0)
        return 'fizzBuzz'
    else if (n1 % 3 == 0)
        return 'fizz'
    else if (n1 % 5 == 0)
        return 'buzz'
    else
        return n1
}

console.log(fizzBuzz(exemplo))