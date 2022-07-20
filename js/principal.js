
//Pegando os nomes 
var paciente = document.querySelector("#primeiro-paciente");

const pacientes = document.querySelectorAll(".paciente")


const toImc = (peso, altura) => peso / Math.pow(altura,2)

pacientes.forEach(tr => {
    const pesos = tr.querySelector(".info-peso").textContent;
    const alturas = tr.querySelector(".info-altura").textContent; 
    const nomes = tr.querySelector(".info-nome").textContent;
    const ValorImcs = tr.querySelector(".info-imc");

    const pesoEhValido = validaPeso(pesos);
    const alturaEhValida = validaAltura(alturas);

    ValorImcs.textContent = toImc(pesos, alturas).toFixed(2)

    // verificando peso inválido
    if(!pesoEhValido){
        tr.classList.add("paciente-invalido");
        ValorImcs.textContent = "Valor inválido"
        pesoEhValido = false;
    }
    //verificando altura
    if(!alturaEhValida){
        tr.classList.add("paciente-invalido");
        ValorImcs.textContent = "Valor inválido"
        alturaEhValida = false;
    }

});

function validaPeso(peso){
    if(peso >= 0 || peso < 1000){
        return true;
    }else{return false}
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{return false;}
}


