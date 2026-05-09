/*
No JavaScript temos 3 palavras-chaves para declarar variáveis: var, let e const.

- var: é a forma tradicional de declarar variáveis. Ela tem escopo de função, o que significa que a variável declarada com var estará disponível em toda a função onde foi declarada, mesmo antes da linha onde foi declarada

Operadores do JavaScript:
- Aritméticos: +, -, *, /, %, operações matemáticas básicas
- Atribuição: = igual, += adiciona e atribui, -= subtrai e atribui, *= multiplica e atribui, /= divide e atribui, %= módulo e atribui
- Comparação: == igual, === estritamente igual, != diferente, !== estritamente diferente, > maior, < menor, >= maior ou igual, <= menor ou igual
- Lógicos: && (AND), || (OR), ! (NOT)




*/
//declaração de variáveis usando var
/*var a, b, c,
    // atribuição de valores
    a = 2;
b = 3;
var c = a + b;
alert(c)*/
var v1, v2, total;
v1 = 10;
v2 = 20;

v1 = v1 + v2
total = v1 * v2;
 alert(total)
 if (total =8) {
    document.getElementById("texto").innerHTML = "O total é menor ou igual à divisão de v1 por v2";
} else {   
}

/*operador ternário é uma forma concisa de escrever uma estrutura condicional if-else. Ele tem a seguinte sintaxe:
condição ? expressão1 : expressão2;*/

var idade,  eleitor;
idade = 18;

eleitor = (idade >= 18) ? "Ele é um eleitor" : "Ele não é um eleitor";
alert('A resposta é: ' + eleitor +' e a idade dele é de: ' + idade);