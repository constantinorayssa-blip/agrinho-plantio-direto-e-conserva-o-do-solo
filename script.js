document.addEventListener("DOMContentLoaded", function () {
    const btnTopo = document.getElementById("btnTopo");
    const secoes = document.querySelectorAll("section");

    // 1. Mostrar/Esconder botão "Voltar ao Topo" conforme o scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnTopo.style.display = "flex";
        } else {
            btnTopo.style.display = "none";
        }

        // 2. Efeito de surgimento das seções (Fade-in)
        secoes.forEach(secao => {
            const topoSecao = secao.getBoundingClientRect().top;
            const tamanhoTela = window.innerHeight * 0.85;

            if (topoSecao < tamanhoTela) {
                secao.classList.add("aparecer");
            }
        });
    });

    // 3. Ação de clicar no botão Voltar ao Topo
    btnTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Dispara o evento uma vez no início para revelar as seções visíveis logo de cara
    window.dispatchEvent(new Event("scroll"));
});