const array01: Array<number> = new Array<number> (1, 2, 3);
const array02: Array<number> = new Array<number> (4, 5, 6);

const arrayCombinado = [...array01, ...array02];

console.log(arrayCombinado);