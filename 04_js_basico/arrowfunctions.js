// Arrow Function com um parâmetro
const exibir = n => console.log(n);

// Arrow Function com dois ou mais parâmetros
const somar = (n1, n2) => console.log(n1 + n2);

exibir(5);
somar(5, 10);

// Array de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Arrow Function com mais de uma ação no Corpo da Função
numeros.forEach(numero => {
    if (numero % 3 == 0)
        console.log(numero)
})

// Arrow Function com a instrução return
let funcaoComReturn = (n1, n2) => { return n1 + n2 };
console.log(funcaoComReturn(1,2));

// Arrow Function sem a instrução return
let funcaoSemReturn = (n1, n2) => n1 + n2;
console.log(funcaoSemReturn(1,2))