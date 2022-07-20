const tabela = document.querySelector("table")

tabela.addEventListener("dblclick",function(event){
   //setTimeout(f)
   event.target.parentNode.classList.add("fadeOutRemove");

   //uma maneira de representar uma função anonima no js 
   // também é escrita dessa forma 
   setTimeout(() => {
      event.target.parentNode.remove();
   }, 500);
})

