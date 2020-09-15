let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

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
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("pacienteInvalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura Inválido");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválido!";
        paciente.classList.add("pacienteInvalido");
    }

    if (alturaEhValida && pesoEhValido) {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("oi, cliquei no botão");

});