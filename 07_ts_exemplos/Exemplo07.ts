function tabuada(numero: number): void {

    for (let contador = 1; contador <= 10; contador++){
        
        let resultado = numero * contador;
        console.log(`${numero} x ${contador} = ${resultado}`);

    }
        
}

console.log("Tabuada:\n");

tabuada(5);