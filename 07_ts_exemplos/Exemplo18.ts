interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
}

function exibirUsuario(usuario: Usuario) {
  console.log(`O e-mail ${usuario.usuario} pertnce a ${usuario.nome}.`);
}

const usuario = {
  id: 1,
  nome: "Ana Furtado",
  usuario: "ana_furtado@email.com.br",
  senha: "12345678",
  foto: "https://www.imagens.com/usuarios/usuario_01.jpg"
};

exibirUsuario(usuario);