function exemploBasico(){
    alert("Olá mundo");
}
function exemploVariaveis(){
    //variavel que permite armazenar informações

    //Essa variavel é do tipo "String"
    let estabelecimento = "shablau"; //String
    let produto = "Burguer Bacon"
    //Esta variavel é do tipo int 
    let quantidade = 7;
    //esta variavel é um float
    let preco = 30.99;
    //Calcular total do pedido (do tipo float)
    let total =  quantidade * preco;

    //Alterar o valor da variavel
    estabelecimento = "Shablau LTDA";

    //Apresentar a variavel no console
    console.log("Estabelecimento: " + estabelecimento);

    alert("Variaveis:\nEstabelecimento: " + estabelecimento+
        "\nProduto: " + produto +
        "\nQuantidade: " + quantidade +
        "\nPreço: R$ " + preco +
        "\nTotal: R$ " + total.toFixed(2)
    );
}

function exemploCalcularIdade(){
    //preciso armazenar o nome e ano de nascimento
    //Depois calacular a idade
    //Apresentar todas as infos

    let nome = "Dudinha"; //String
    let anoNascimento = 2005; //int
    let anoAtual = 2026;
    let idade = anoAtual-anoNascimento;

    alert("Nome: " + nome +
        "\nIdade: " + idade
    );

}

function exemploBoolean(){
    //Armazenar se uma pessoa está empregada ou n 
    let nome = "Duda"
    //Boolean serve para armazenar true (verdadeiro) false (falso)
    let empregado = true;
    
    alert("Nome: " +nome+ "\nEmpregado: " + empregado)
}

function calcularAumentoSalario(){
    let salario = 3504.20;
    let percentual = 20.42;
    let salarioNovo = salario + (salario*(percentual/100));
    alert(salarioNovo.toFixed(2));

}

function calcularAumentoSalarioAlternativo(){
    let salario = 3504.20;
    let percentual = 20.42 / 100 + 1;
    let salarioNovo = salario * percentual;
    alert("Novo salario: R$" + salarioNovo.toFixed(2));
}

/*

Ex. 1: Criar uma função exercicio01 com as seguintes variaveis:
nome: 
sobrenome:
cor favorita:
ano de nascimento:
auxilio educação:
joga rpg com valor falso

Alterar a variavel de joga rpg para verdadeiro
Alterar a cor favorita para roxo

Apresentar todos os dados

*/

function exercicio01(){

let nome = "Maria Eduarda";  
let sobrenome = "Silva Pereira";
let corFavorita= "Preto e Azul Sereno";    
let anoNascimento = 2005;
let auxilioEducacao = 500.50;   
let jogaRPG= false;

jogaRPG = true;
corFavorita = "Roxo";

alert("Nome: " +nome+ 
    "\nSobrenome: " +sobrenome+ 
    "\nCor Favorita: " +corFavorita+ 
    "\nAno de nascimento: " +anoNascimento+ 
    "\nAuxilio educação: " +auxilioEducacao+ 
    "\nJoga RPG: " +jogaRPG
);
    

}