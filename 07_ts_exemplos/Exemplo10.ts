function somarNumeros(...numbers: number[]): number {
    let soma = 0;
    numbers.forEach((numero) => soma += numero);
    return soma;
}

console.log("Soma:", somarNumeros());
console.log("Soma:", somarNumeros(10, 20));
console.log("Soma:", somarNumeros(10, 20, 30));