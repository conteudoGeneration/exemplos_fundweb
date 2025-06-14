/* Criar as variáveis */
let numero_01 = 10, numero_02 = 0;

/* Executa as 4 Operações Matemáticas */
console.log(`Soma: ${numero_01 + numero_02}`);
console.log(`Subtração: ${numero_01 - numero_02}`);
console.log(`Multiplicação: ${numero_01 * numero_02}`);

/* Verifica o segundo valor antes de executar a divisão*/
if(numero_02 === 0)
    console.log("Não existe divisão por 0");
else
    console.log(`Divisão: ${numero_01 / numero_02}`);