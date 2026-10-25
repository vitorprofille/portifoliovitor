/* =====================================================
   VITOR PROFILLE — PORTFÓLIO
===================================================== */


/* =====================================================
   PROJETOS
   Para adicionar um novo projeto no futuro,
   basta criar outro bloco dentro desta lista.
===================================================== */

const projetos = [

    {
        titulo: "Burguer & Co",

        descricao:
            "Cardápio digital moderno com pedidos direcionados para o WhatsApp.",

        imagem:
            "images/burguer-co.jpg",

        link:
            "https://vitorprofille.github.io/burguer-co/"
    }

];


/* =====================================================
   EXIBIR PROJETOS
===================================================== */

const projectsContainer =
    document.querySelector("#projects-container");


function mostrarProjetos() {

    if (!projectsContainer) {
        return;
    }


    projectsContainer.innerHTML = "";


    projetos.forEach((projeto) => {

        const card = document.createElement("article");

        card.classList.add("project-card");


        card.innerHTML = `

            <div class="project-image-container">

                <img
                    src="${projeto.imagem}"
                    alt="${projeto.titulo}"
                    class="project-image"
                    loading="lazy"
                >

            </div>


            <div class="project-content">

                <span class="project-number">
                    PROJETO
                </span>


                <h3>
                    ${projeto.titulo}
                </h3>


                <p>
                    ${projeto.descricao}
                </p>


                <a
                    href="${projeto.link}"
                    class="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver projeto
                </a>

            </div>

        `;


        projectsContainer.appendChild(card);

    });

}


/* =====================================================
   NAVEGAÇÃO SUAVE
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const destino =
                link.getAttribute("href");


            if (
                !destino ||
                destino === "#"
            ) {
                return;
            }


            const elemento =
                document.querySelector(destino);


            if (!elemento) {
                return;
            }


            event.preventDefault();


            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


/* =====================================================
   ANO AUTOMÁTICO
===================================================== */

const anoAtual =
    new Date().getFullYear();


const rodape =
    document.querySelector(".footer p");


if (rodape) {

    rodape.textContent =
        `© ${anoAtual} Vitor Profille. Todos os direitos reservados.`;

}


/* =====================================================
   INICIAR
===================================================== */

mostrarProjetos();