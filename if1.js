const leia = require('readline-sync');

let numeroA; 
let numeroB; 
let numeroC

numeroA=leia.questionInt("Digite um numero inteiro: ", {
    limitMessage: 'Digite um numero inteiro'});

numeroB=leia.questionInt("\nDigite um numero inteiro: ", {
    limitMessage: 'Digite um numero inteiro'});

numeroC=leia.questionInt("\nDigite um numero inteiro: ", {
    limitMessage: 'Digite um numero inteiro'});

if (numeroA+numeroB>numeroC) {
    console.log(numeroA," + ",numeroB," = ",(numeroA+numeroB)," > ", numeroC);
}
if (numeroA+numeroB<numeroC) {
    console.log(numeroA," + ",numeroB," = ",(numeroA+numeroB)," < ", numeroC);
  console.log("A Soma de A + B é Menor do que C");
}

if (numeroA+numeroB==numeroC) {
    console.log(numeroA," + ",numeroB," = ",(numeroA+numeroB)," = ", numeroC);
    console.log("A Soma de A + B é Igual a C");
}