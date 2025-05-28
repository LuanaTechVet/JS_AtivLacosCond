const leia = require('readline-sync');
let codigo
let preco
let quant

codigo=leia.questionInt("Digite o codigo do produto: ", {
    limitMessage: 'Digite um numero inteiro de 1 a 6'});

switch (codigo) {
  case 1:
    console.log("Produto: Cachorro Quente");
    preco=10
    break;
  case 2:
    console.log("Produto: X-Salada");
    preco=15
    break;
  case 3:
    console.log("Produto: X-Bacon");
    preco=18
    break;
  case 4:
    console.log("Produto: Bauru");
    preco=12
    break;
  case 5:
    console.log("Refrigerante");
    preco=8
    break;
  case 6:
    console.log("Suco de laranja");
    preco=13
    break;
  default:
    console.log("código invalido");
  return
}
quant=leia.questionInt("Digite a quantidade desejada: ", {
    limitMessage: 'Digite um numero inteiro'});
console.log("Valor total", new Intl.NumberFormat('pt-BR', 
    { style: 'currency', currency: 'BRL',}).format(quant*preco))

