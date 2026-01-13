try {
    
    // Tenta converter um número em letras maiúsculas
    const resultado = converte(123);

    console.log(resultado);

} catch (error) {
    // Captura o erro e informa ao usuário
    console.error("Não é possível converter para letras maiúsculas!");
}

// Função para formatar uma string com todas as letras maiúsculas
function converte(conteudo){
    return conteudo.toUpperCase();
}