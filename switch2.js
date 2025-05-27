const leia = require('readline-sync');
let NomeColab
let cargo
let reajuste
let salario


NomeColab=leia.question("Digite o nome do colaborador: ", {
    limitMessage: 'Digite um nome'});
    console.log(NomeColab);

cargo=leia.questionInt("Digite o numero do cargo do colaborador (1 a 6): ", {
    limitMessage: 'Digite um numero inteiro de 1 a 6'});



switch (cargo){
  case 1:
    console.log("Gerente");
    reajuste=0.1
    break;
  case 2:
    console.log("Vendedor");
    reajuste=0.07
    break;
  case 3:
    console.log("Supervisor");
    reajuste=0.09
    break;

  case 4:
    console.log("Motorista");
    reajuste=0.06
    break;
  case 5:
    console.log("Estoquista");
    reajuste=0.05
    break;
  case 6:
    console.log("Tecnico de TI");
    reajuste=0.08
    break;
  default:
    console.log("Cargo invalido");
  return
}

salario=leia.questionFloat("Digite o salario (separe os centavos com ponto): ", {
    limitMessage: 'Digite um valor numerico separando os centavos com ponto'});
console.log("Salario: ", new Intl.NumberFormat('pt-BR', 
    { style: 'currency', currency: 'BRL',}).format(salario + (reajuste * salario)))


