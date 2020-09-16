let botaoAdicionar = document.querySelector("#adicionar-paciente");

let obtemInfosForm = (form) => {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
};

let montaTd = (dado, classe) => {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

let montaTr = (paciente) => {
    let pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");

    let nomeTd = montaTd(paciente.nome, "info-nome");
    let pesoTd = montaTd(paciente.peso, "info-peso");
    let alturaTd = montaTd(paciente.altura, "info-altura");
    let gorduraTd = montaTd(paciente.gordura, "info-gordura");
    let imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTR.appendChild(nomeTd);
    pacienteTR.appendChild(alturaTd);
    pacienteTR.appendChild(pesoTd);
    pacienteTR.appendChild(gorduraTd);
    pacienteTR.appendChild(imcTd);

    return pacienteTR;
}

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();

    let form = document.querySelector("#formAdiciona");

    //Extraindo infos do paciente do form
    let paciente = obtemInfosForm(form);

    console.log(paciente);

    //cria tr e td
    let pacienteTR = montaTr(paciente);

    //Adicionando paciente em tabela

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);

    form.reset();
});