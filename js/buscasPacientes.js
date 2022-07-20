const addPascientes = document.querySelector("#buscar-paciente");

addPascientes.addEventListener("click", ()=> {
    
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", ()=> {
        const resposta = xhr.responseText
        const pacientes =  JSON.parse(resposta) //deserializando o objeto
        
        console.log(typeof resposta)
        console.log(typeof pacientes);
    });

    xhr.send()
});