const leia = require('readline-sync');
let numero

numero=leia.questionInt("Digite um numero inteiro: ", {
    limitMessage: 'Digite um numero inteiro'});

if (numero%2==0 && numero>=0){
    console.log("O Número",numero,"é par e positivo!");
}
if (numero%2==0 && numero<0){
    console.log("O Número",numero,"é par e negativo!");
}
if (numero%2!=0 && numero>=0){
    console.log("O Número",numero,"é impar e positivo!");
}
if (numero%2!=0 && numero<0){
    console.log("O Número",numero,"é impar e negativo!");
}