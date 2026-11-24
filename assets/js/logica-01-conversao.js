function conversaoParaInt(){
    let numero = parseInt("32");
    let valor = numero * 2;
    alert("Número: " + numero + 
        "\nValor: Número * 2: " + valor.toFixed(2)
    );

}

function converterParaFloat(){

    let numero1 = parseFloat("32.01");
    let numero2 = parseFloat("0.01");

    let total = numero1 + numero2;
    alert(
        "Número1: " + numero1 +
        "\nNúmero2: " + numero2 +
        "\nTotal: " + total.toFixed(2)

    );

}   