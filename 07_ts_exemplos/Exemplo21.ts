async function buscarDados() {
    try {
        const resposta = await fetch('https://fakestoreapi.com/products');

        if (!resposta.ok) {
            // Caso o status HTTP indique erro (ex: 404, 500)
            throw new Error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        console.log("Dados recebidos:", dados);

    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

buscarDados();