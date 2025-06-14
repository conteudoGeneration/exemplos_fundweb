export const usuario: { nome: string } = { nome: "João da Silva" };

// O código comentado abaixo gera o erro: Cannot assign to 'usuario' because it is a constant.ts(2588)
//usuario = { nome: "João da Silva Junior" };

console.log("O Nome do Usuário é:", usuario.nome);