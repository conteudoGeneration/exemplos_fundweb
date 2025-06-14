export const numeros: number[] = [1, 2, 3, 4, 5];

// map() - cria um novo array com o dobro de cada número
const dobrados: number[] = numeros.map((num: number) => num * 2);
console.log('Dobro:', dobrados); // [2, 4, 6, 8, 10]

// filter() - filtra números maiores que 3
const maioresQueTres: number[] = numeros.filter((num: number) => num > 3);
console.log('Maiores que 3:', maioresQueTres); // [4, 5]

// reduce() - soma todos os números do array
const soma: number = numeros.reduce((acumulador: number, valor: number) => acumulador + valor, 0);
console.log('Soma:', soma); // 15

// find() - encontra o primeiro número par
const primeiroPar: number | undefined = numeros.find((num: number) => num % 2 === 0);
console.log('Primeiro par:', primeiroPar); // 2

// some() - verifica se existe algum número maior que 4
const existeMaiorQueQuatro: boolean = numeros.some((num: number) => num > 4);
console.log('Existe número > 4?', existeMaiorQueQuatro); // true

// every() - verifica se todos são menores que 10
const todosMenoresQueDez: boolean = numeros.every((num: number) => num < 10);
console.log('Todos menores que 10?', todosMenoresQueDez); // true

// concat() - junta outro array
const maisNumeros: number[] = numeros.concat([6, 7, 8]);
console.log('Array concatenado:', maisNumeros); // [1, 2, 3, 4, 5, 6, 7, 8]

// slice() - obtém uma parte do array
const parte: number[] = numeros.slice(1, 4);
console.log('Slice:', parte); // [2, 3, 4]

// join() - cria uma string com os elementos separados por hífen
const stringNumeros: string = numeros.join(' - ');
console.log('Join:', stringNumeros); // "1 - 2 - 3 - 4 - 5"
