/*
No JavaScript temos 3 palavras-chaves para declarar variáveis: var, let e const.

- var: é a forma tradicional de declarar variáveis. Ela tem escopo de função, o que significa que a variável declarada com var estará disponível em toda a função onde foi declarada, mesmo antes da linha onde foi declarada






*/
//declaração de variáveis usando var
/*var a, b, c,
    // atribuição de valores
    a = 2;
b = 3;
var c = a + b;
alert(c)*/
var nome, sobrenome, nomeCompleto;
nome = "Arthur";
sobrenome = "Candido"; 
nomeCompleto = nome + " " + sobrenome;
document.getElementById("texto").innerHTML = nomeCompleto;
