// Animação de surgir das seções

window.sr = ScrollReveal({ reset: true })

sr.reveal('.home', { duration: 1500, delay: 200, distance: '500px', origin: 'top', easing: 'ease-in-out'});
sr.reveal('.sobre-mim, .habilidades, .projetos', { duration: 1500, delay: 200 });
sr.reveal('.projeto', { duration: 1500 , distance: '800px', origin: 'left', easing: 'ease-out' });

// Visibilidade do header

const handleScroll = () => {
    const elemento = document.querySelector('.header');
    const scrollThreshold = 700;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
        elemento.classList.add('header-fixo')
    } else if (scrollTop <= scrollThreshold) {
        elemento.classList.remove('header-fixo');
    }
};

window.addEventListener('scroll', handleScroll);

// Mostrar informações das habilidades 

const informacoes = document.querySelectorAll(".esconder")
const cards = document.querySelectorAll(".tools")

cards.forEach((card, i) => {
    card.addEventListener("mouseover", () =>{
        removerSelecaoInformacoes();
        informacoes[i+1].classList.add("escolhido")
    })
    card.addEventListener("mouseout", () =>{
        removerSelecaoInformacoes()
        informacoes[0].classList.add("escolhido")
    })
});

function removerSelecaoInformacoes() {
    const cardSelecionado = document.querySelector(".esconder.escolhido");
    cardSelecionado.classList.remove("escolhido");
}