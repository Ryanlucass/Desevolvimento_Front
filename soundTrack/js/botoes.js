const botoes = document.querySelectorAll(".tecla");

botoes.forEach(b => {
    b.addEventListener("click", ()=> {
        
        var nameClass = b.className.substring(12,14);
        var sound = document.querySelector(`#som_tecla_${nameClass}`).src;

        const music = new Audio(sound);
        music.play();
    });
})

