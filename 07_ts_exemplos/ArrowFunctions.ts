// Um parâmetro - parênteses opcionais
export const exibir = (n: number): void => console.log(n);

// Dois parâmetros - parênteses obrigatórios
const somar = (n1: number, n2: number): void => console.log(n1 + n2);

exibir(5);
somar(5, 10);

// Lista de números
export const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Arrow function com múltiplas instruções no corpo
numeros.forEach((numero: number): void => {
  if (numero % 3 === 0) {
    console.log(numero);
  }
});

// Com return explícito
const comReturn = (n1: number, n2: number): number => {
  return n1 + n2;
};

// Com retorno implícito
const semReturn = (n1: number, n2: number): number => n1 + n2;

console.log(comReturn(1, 2));
console.log(semReturn(1, 2));