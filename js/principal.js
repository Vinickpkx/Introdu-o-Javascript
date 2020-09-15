let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector("#primeiroPaciente");

let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let tdImc = paciente.querySelector(".info-imc")

let pesoEhValido = true;
let alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso Inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!"
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura Inválido");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválido!"
}

if (alturaEhValida && pesoEhValido) {
    let imc = peso / (altura * altura);
    tdImc.textContent = imc;
}