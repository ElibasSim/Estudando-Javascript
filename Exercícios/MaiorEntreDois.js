let a = 5;
let b = 6;

function maior(n1, n2){ 
    if (n1 > n2)
        return n1;
    else if (n2 > n1)
        return n2;
    else
        return "Os numeros são iguais";
}

console.log(maior(a,b));

// versão otimizada:
// return n1 > n2 ? n1 : n2;