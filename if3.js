const leia = require('readline-sync');
let doador
let idade
let primeira

doador=leia.question("Digite o nome do doador: ", {
    limitMessage: 'Digite um nome'});

idade=leia.questionInt("Digite a idade do doador: ", {
    limitMessage: 'Digite um numero inteiro'});

primeira=leia.question("Priemira doacao? (s/n): ", {
    limitMessage: 'Digite s se sim e n se não'});

if (primeira!="s" && primeira!="n"){
    console.log("Resposta invalida! Digite s ou n")
   return
 }
if(idade>=18 && idade<60) {
    console.log(doador,"está apta(o) para doar sangue!");
}else if(idade<18 || idade>69){
    console.log(doador,"não está apta(o) para doar sangue!");
}else if(idade>=60 && idade<=69){
    if (primeira=="s"){
    console.log(doador,"não está apta(o) para doar sangue!");
    }else{
    console.log(doador,"está apta(o) para doar sangue!");   
    }
}