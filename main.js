var titulo = document.querySelector("titulo");
titulo.textContent = "Lucas Nutrição";


var paciente = document.querySelector("#primeiro paciente");


var tdPeso = paciente.querySelector(".info-Peso");
var peso = tdPeso.textContent;


var tdAltura = paciente.querySelector(".info-altura");
var Altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".Info-imc");


var pesoInvalido = true;
var alturaEnvalido = true;


tdImc.textContent =Imc;


if(peso < 0) {
  tdPeso.textContent = "Peso invalido";
}
tdImc.textContent = Imc;


if(peso > 600) {
 tdImc.textContent = "Peso invalido";
 pesoEnvalido = false;
} 


if(altura < 0 || altura > 2.00) {
  tdImc.textContent = "Altura inválida"
  alturaEnvalida = false;
}

if(pesoEnvalido && alturaEnvalida); {
  var Imc = peso / (altura * altura);
tdImc.textContent = Imc
}

function mostraMensagem(){
  console.log("o titulo foi clicado");
}

var botaoAdicionar = document.querySelector("#adicionarPaciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

var form = document.querySelector("#form-adiciona");

var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value

var pacienteTr = document.creatElement ("tr");

var nomeTd = document.createElement ("td");
var pesoTd = document.createElement ("td");
var alturaTd = document.createElement ("td");
var gorduraTd = document.createElement ("td");
var imcTd = document.createElement ("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;

pacienteTr.apprendChild nomeTd;
pacienteTr.apprendChild pesoTd;
pacienteTr.apprendChild alturaTd;
pacienteTr.apprendChild gorduraTd;

var tabela = document.queryselector )"#tabela-pacientes");

tabela