let aluno ={
    nome: "Cauã Brasil Pereira da Silva", 
    idade: 17,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2024-02-19", "2024-02-20", "2024-02-21"],
    ra: "22002200"
}

let aluno2 ={
    nome: "Cauã", 
    idade: 17,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presenca: ["2024-02-19", "2024-02-20", "2024-02-21"],
    ra: "22002200"
}
function validarnome (aluno) {
let aluno;
if(nome<10){ //está validando se tem até 10 caracteres
    result = 'Certo';
} else {
    result = 'Erro';
  }
return result;
}   
console.log("Erro: Nome do aluno deve ter no mínimo 10 caracteres");

function ValidarIdade (aluno) {
let aluno;
if(idade<14){ //validando se tem mais que 14
    result = "certo";
}
else {
    result = 'erro';
  }
  return result;
}
console.log("Erro: idade do aluno tem que ser maior que 14");

function ValidarCursos (aluno){
let aluno;
if(cursando<3){ //validando se está em 3 cursos ou mais
    result = "certo";
}
else {
    result = 'erro';
  }
  return result;
}
console.log("Erro: o aluno deve estar cursando pelo menos 3 matérias");

function ValidarPresenca (aluno) {
let aluno;
if(presenca<2){ //validando se colocou 2 presenças
    
    result = 'certo';

} else {
    result = 'erro';
  }
  return result;
}
console.log("Erro: o aluno deve ter pelo menos 3 presenças");

function ValidarAluno (aluno) {
let aluno;
if(ra<=9999999 && ra>=1000000){ //validando se o ra tem 7 digitos

    result = 'certo';

} else {
    result = 'erro';
  }
  return result;
}
console.log("Erro: o ra do aluno deve ter pelo menos 7 digitos");
