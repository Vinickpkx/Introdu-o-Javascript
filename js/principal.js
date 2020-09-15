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

    let form = document.querySelector("#formAdiciona");

    let nome = form.nome.value;
    let altura = form.altura.value;
    let peso = form.peso.value;
    let gordura = form.gordura.value;

    let pacienteTR = document.createElement("tr");
    let nomeTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    // imcTd.textContent = imc;

    pacienteTR.appendChild(nomeTd);
    pacienteTR.appendChild(alturaTd);
    pacienteTR.appendChild(pesoTd);
    pacienteTR.appendChild(gorduraTd);
    pacienteTR.appendChild(imcTd);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);

    console.log(pacienteTR);

});