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
/*var v1, v2, total;
v1 = 10;
v2 = 20;

v1 = v1 + v2
total = v1 * v2;
alert(total)
if (total = 8) {
    document.getElementById("texto").innerHTML = "O total é menor ou igual à divisão de v1 por v2";
} else {
}

/*operador ternário é uma forma concisa de escrever uma estrutura condicional if-else. Ele tem a seguinte sintaxe:
condição ? expressão1 : expressão2;*/
/*
var idade, eleitor;
idade = 18;

eleitor = (idade >= 18) ? "Ele é um eleitor" : "Ele não é um eleitor";
alert('A resposta é: ' + eleitor + ' e a idade dele é de: ' + idade);
/*uma função é um bloco de código que pode ser reutilizado para realizar uma tarefa específica.
Ela é definida usando a palavra-chave function, seguida pelo nome da função e um conjunto de parênteses que podem conter parâmetros.
O código dentro da função é executado quando a função é chamada.*/
//FUNÇAO DE SOMA
/*function soma(valor1, valor2) {
    var resultado = valor1 + valor2;
    return resultado;
}
document.getElementById("texto").innerHTML = soma(10, 10);
//exemplo de função para converter real para dólar
function realParaDolar(real, cotaDolar) {
    return real / cotaDolar;
}

var valorReal = 9.50;
var cotacao = 5.25;
var total = realParaDolar(valorReal, cotacao);
alert("O valor em real é de R$" + valorReal + " e o valor em dólar é de $" + total);
*/

function alertaHello() {
    alert("Hello, World!");
}

function paraCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


var x = paraCelsius(100);
alert("100 graus Fahrenheit é igual a " + x + " graus Celsius.");
/*objeto é uma coleção de propriedades, onde cada propriedade é uma associação entre um nome (chave) e um valor.
Os objetos são usados para armazenar dados e funcionalidades relacionadas.
Eles podem conter propriedades que são valores primitivos, outros objetos ou funções (métodos).
A sintaxe para criar um objeto em JavaScript é usando chaves {} e definindo as propriedades dentro delas.*/
const carro = {
marca: "Toyota", 
modelo: "Corolla", 
ano: 2020, 
placa: "ABC-1234",
buzinar: function() {
    alert("Beep beep!");
},
completo: function() {
    return this.marca + " " + this.modelo + " " + this.ano + " " + this.placa;
},
};
console.log(carro.completo());   // Acessando a propriedade marca
carro.buzinar(); // Chamando o método buzinar

//metodo é uma função associada a um objeto. Ele é usado para definir comportamentos ou ações que o objeto pode realizar.