export function esperar(ms: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject("O tempo não pode ser negativo.");
        }

        setTimeout(() => {
            resolve(`Esperou ${ms} milissegundos (${ms / 1000} segundos)`);
        }, ms);
    });
}

async function executar() {
    console.log('Início');

    try {
        const resultado = await esperar(-1); // inserimos um numero negativo (erro)
        console.log(resultado);
    } catch (erro) {
        console.error("Erro durante a execução:", erro);
    }

    console.log('Fim');
}

executar();