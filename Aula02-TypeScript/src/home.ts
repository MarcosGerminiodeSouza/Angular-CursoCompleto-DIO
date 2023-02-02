type heroi = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: heroi) {
    console.log(pessoa);
}

// printa(escreve) objetos.
printaObjetos({
    name: "Bruce Wayne",
    vulgo: "Batman",
});

console.log("Olá mundo!");