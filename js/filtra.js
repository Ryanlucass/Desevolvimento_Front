const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", ()=> {
   
   const temAlgo = campoFiltro.value.length > 0 ? true : false;
   
    pacientes.forEach(x=>{
      tdNamePaciente = x.querySelector(".info-nome").textContent;
          
      if(temAlgo == true){
          if( tdNamePaciente != campoFiltro.value){
              x.classList.add("invisivel");
            }else{
                x.classList.remove("invisivel")
            }      
        }
        else{
            x.classList.remove("invisivel")
        }
    })
});