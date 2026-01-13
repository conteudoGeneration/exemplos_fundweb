// Cria um array de cores com dois elementos iniciais
let cores = ["azul", "verde"];

// Adiciona o valor "vermelho" ao final do array
cores.push("vermelho");

// Exibe o array atualizado no console
console.log(cores);

// Remove o último elemento do array ("vermelho")
cores.pop();

// Exibe o array após a remoção do último item
console.log(cores);

// Cria um array numérico com vários valores
let numeros = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

// Percorre cada elemento do array e exibe o valor no console
numeros.forEach(numero => {
    console.log(numero);
});

// Cria um novo array com todos os valores multiplicados por 2
// O array original "numeros" não é alterado
let dobrados = numeros.map(numero => numero * 2);

// Exibe o novo array com os valores dobrados
console.log(dobrados);

// Cria um novo array contendo apenas os números maiores que 10
let maioresQueDez = numeros.filter(numero => numero > 10);

// Exibe o array filtrado
console.log(maioresQueDez);
