alert('Hello, world! 🚀')
var nome = prompt('Qual é o seu nome? 🤔')
alert('Seja bem-vindo(a) ao meu portfólio interativo, ' + nome + '! 😀')

var numero1 = getElementById('numero1').value
var numero2 = getElementById('numero2').value
var operacao = getElementById('operacao').value
var resultado = 0

switch(operacao){
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case 'x':
        resultado = numero1 * numero2;
        break;
    case '/':
        resultado = numero1 / numero2;
}

getElementById('botao') 
    alert('O resultado é ' + resultado)
}