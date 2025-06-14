export const colaboradora = {
  nome: "Mariana",
  idade: 30,
  cargo: "Desenvolvedora Fullstack",
  senioridade: "Plena",
  salario: 8000.00
};

const { nome, idade, ...propriedades } = colaboradora;

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade} anos`);
console.log(`Demais atributos: ${JSON.stringify(propriedades)}`);