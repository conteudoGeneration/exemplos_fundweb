/* Criar as variáveis */
let numero_01 = 10, numero_02 = 2;

/* Executa as 4 Operações Matemáticas */
console.log(`Soma: ${somar(numero_01, numero_02)}`);
console.log(`Subtração: ${subtrair(numero_01, numero_02)}`);
console.log(`Multiplicação: ${multiplicar(numero_01, numero_02)}`);

const divisao = dividir(numero_01, numero_02);

/* Valida o resultado da divisão*/
if( divisao === Infinity)
    console.log("Não existe divisão por 0");
else
    console.log(`Divisão: ${divisao}`);

/* Funções de Cálculo */
function somar(numero_01, numero_02){
    return numero_01 + numero_02;
}

function subtrair(numero_01, numero_02){
    return numero_01 - numero_02;
}

function multiplicar(numero_01, numero_02){
    return numero_01 * numero_02;
}

function dividir(numero_01, numero_02){
    return numero_01 / numero_02;
}