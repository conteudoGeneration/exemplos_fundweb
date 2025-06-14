// Cria um array do tipo number chamado notas e inicializa com valores
const notas: Array<number> = new Array<number>(7.0, 5.0, 4.0, 10.0);

/* Exibe todas as notas na tabela */
console.table(notas);

/* Adiciona uma nova nota */
notas.push(4.0);

// Mostra o índice da primeira ocorrência da nota 5
console.log("\nA posição da nota 5 é: " + notas.indexOf(5));

// Verifica se a nota 5 existe no array
console.log("\nA nota 5 existe no array? " + notas.includes(5));

// Mostra a nota na posição 1 do array
console.log("\nNa posição 1 do array, a nota é: " + notas[1]);

// Altera a nota 5.0 para 6.0 e mostra que a alteração foi efetuada
notas[notas.indexOf(5)] = 6.0;

// Remove a primeira ocorrência da nota 4.0 e mostra que a exclusão foi efetuada
notas.splice(notas.indexOf(4.0), 1);

// Exibe o tamanho atual do array (número de elementos)
console.log("\nO tamanho do array é: " + notas.length);

/* Exibe todas as notas atualizadas */
console.table(notas);