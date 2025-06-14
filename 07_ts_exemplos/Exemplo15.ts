const pessoa = {
  nome: 'João',
  idade: 25
};

console.log(pessoa);

const novaPessoa = {
  ...pessoa,
  cidade: 'São Paulo'
};

console.log(novaPessoa);