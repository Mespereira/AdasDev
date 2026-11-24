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

//Exercicio 01 (tudo deve ser convertido for int e float)

function exercicio01(){
    
let nome = "Maria Eduarda"
let quantidadeHorasTrabalhadas= parseInt("15")
let valorHora= parseFloat("105.50")
let auxilioCreche= parseFloat("390.50")
let descontoPasse= parseFloat("200.00")
let auxilioEducaçao= parseFloat("550.5")

let total = quantidadeHorasTrabalhadas + valorHora + auxilioCreche + auxilioEducaçao - descontoPasse;

alert(

"Nome: " +nome+ 
"\nQuantidade de horas trabalhadas: " +quantidadeHorasTrabalhadas+ 
"\nValor da hora: " +valorHora+ 
"\nAuxilio creche: " +auxilioCreche+ 
"\nDesconto do Passe: " +descontoPasse+ 
"\nAuxilio educação: " +auxilioEducaçao+ 
"\nTotal: " +total 

    )
}