


//Evento de click no botão 
const buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", function(event){
    //evento que tira o comportamente padrão da tag, no caso ele não recarrega a página e não envia, mesmo sendo um from
    event.preventDefault()

    const form = document.querySelector("#form-adiciona");
    const paciente = getPacienteForForm(form);

    const pacienteTr = postTr(paciente);

    if(!validaPaciente(paciente.peso)){
        console.log("Paciente inválido");
        return;
    }
        
   const tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr);
}); 

function getPacienteForForm(form){    
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: toImc(form.peso.value, form.altura.value).toFixed(2)
    }

    return paciente;
}

function postTr(paciente){
      //criando os elementos da minha linha na tabela para adicionar no html
      const pacienteTr = document.createElement("tr");
      pacienteTr.classList.add("paciente");
 
     pacienteTr.appendChild(MontaTd(paciente.nome, "info-nome"));
     pacienteTr.appendChild(MontaTd(paciente.altura, "info-altura"));
     pacienteTr.appendChild(MontaTd(paciente.peso, "info-peso"));
     pacienteTr.appendChild(MontaTd(paciente.gordura,"info-gordura"));
     pacienteTr.appendChild(MontaTd(paciente.imc, "info-imc"));


     return pacienteTr
}

function MontaTd(dado, nomeClasse){
    const td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(nomeClasse);

    return td;    
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
       console.log(validaPeso(paciente.peso));
       return true
    }else{return true}
}
