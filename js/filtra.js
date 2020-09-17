let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    let pacientes = document.querySelectorAll(".paciente");
    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i];
        let tdNome = paciente.querySelector(".info-nome");
        let nome = tdNome.textContent;
        let expressao = new RegExp(this.value, "i");

        if (this.value.length > 0) {
            console.log("tem algo");
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel")
            } else {
                paciente.classList.remove("invisivel")
            }
        } else {
            for (let i = 0; i < pacientes.length; i++) {
                const paciente = pacientes[i];
                paciente.classList.remove("invisivel");
            }
        }

    }
});