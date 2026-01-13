try {
    
    let idade = 15;

    // Tenta validar a idade com a função validarIdade
    validarIdade(idade);

} catch (error) {
    // Caso a iade não seja validada, 
    // exibe a mensagem de erro (message)
    // e finaliza o programa
    console.error(error.message);
}

function validarIdade(idade) {

    if (idade < 18)
        // Se a idade for menor do que 18, a função lança uma Exceção
        throw new Error("A Pessoa não está apta a dirigir!");
    else
        // Caso contráro, exibe a mensagem abaixo
        console.log("A Pessoa está apta a dirigir!");

}