function listarNomes(...nomes: string[]): void {
    if (nomes.length === 0) {
        console.log("Nenhum nome foi informado.");
        return;
    }

    console.log("\nLista de nomes:\n");
    nomes.forEach((nome, index) => {
        console.log(`${index + 1}. ${nome}`);
    });
}

listarNomes();
listarNomes("Ana"); 
listarNomes("Carlos", "Beatriz", "Fernando", "Juliana"); 