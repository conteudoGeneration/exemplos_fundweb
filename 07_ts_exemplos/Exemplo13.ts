export const numeros: Array<number> = new Array<number> (1, 2, 3, 4, 5, 6);

const [um, dois, ...resto] = numeros;

console.log(um);
console.log(dois);
console.log(resto); 