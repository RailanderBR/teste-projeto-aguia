document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO CARROSSEL DE IMAGENS ---

    // Lista de imagens do slide
    const IMAGENS = [
        { src: './assets/image/template/mackenzie.png', nome: 'Ensino Mackenzie' },
        { src: './assets/image/template/matriculas-abertas.png', nome: 'Matrículas' },
        { src: './assets/image/template/festa-caipira.png', nome: 'Festa Caipira' },
        { src: './assets/image/template/meninas.jpg', nome: 'Estudando Matemática' },
        { src: './assets/image/template/chácara-do-tiao.png', nome: 'Atividade diferenciada' },
    ];

    let indice = 0; // índice da imagem atual

    const mainImageEl = document.getElementById('mainImage');
    const progressEl = document.getElementById('progress');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    // Função para mostrar a imagem com fade e brilho
    function selecionar(i) {
        indice = i;

        mainImageEl.style.opacity = 0; // inicia transparente
        mainImageEl.classList.add('brilho'); // aplica brilho

        setTimeout(() => {
            mainImageEl.src = IMAGENS[indice].src; // muda a imagem
            mainImageEl.style.opacity = 1; // fade-in

            // remove o brilho após 300ms
            setTimeout(() => mainImageEl.classList.remove('brilho'), 300);
        }, 300);

        // Atualiza o contador de progresso
        progressEl.textContent = `${indice + 1} / ${IMAGENS.length}`;
    }

    // Próximo slide
    function proximo() { selecionar((indice + 1) % IMAGENS.length); }

    // Slide anterior
    function anterior() { selecionar((indice - 1 + IMAGENS.length) % IMAGENS.length); }

    // Eventos dos botões
    if (btnPrev) btnPrev.addEventListener('click', anterior);
    if (btnNext) btnNext.addEventListener('click', proximo);

    // Inicializa o slide
    selecionar(0);

    // Troca automática a cada 7 segundos
    setInterval(proximo, 7000);

    // --- LÓGICA DA BARRA DE PESQUISA ---

    // Seletores do formulário e do campo de pesquisa
    const formularioDePesquisa = document.querySelector('form.d-flex');
    const campoDePesquisa = document.querySelector('input[type="search"]');

    // Mapeia todas as seções e seus textos para busca
    const conteudosPesquisaveis = [
        { elemento: document.querySelector('#galeria-verificacao'), texto: 'Galeria de fotos, carrossel' },
        { elemento: document.querySelector('#list-menu'), texto: 'Carinho e Amor é o nosso lema. Escola de Educação Infantil e Fundamental' },
        { elemento: document.querySelector('section > h1.article'), texto: 'Educação com carinho e amor' },
        { elemento: document.querySelector('section > p'), texto: 'Descubra a Educação Mackenzie: onde cada descoberta é feita com propósito! Educação Infantil e nos Anos Iniciais. livros, conexão, brincadeira, encantamento. criança cresce feliz, desenvolvendo o corpo, o pensamento, o coração e a capacidade de se relacionar bem com os outros. histórias que encantam, brincadeiras que ensinam e atividades que fazem sentido para o dia a dia dos pequenos. alfabetização, som das letras, magia das palavras, valores que inspiram respeito, amizade, alegria e responsabilidade. educar para a vida. roda de conversa, jogo, história inventada ou na construção de ideias com tecnologia, convite para pensar, criar e crescer. O Mackenzie aproxima o que se aprende na sala com o que se vive na vida, sem deixar a alma de fora. educação que prepara o hoje e inspira o amanhã, com leveza, respeito, criatividade e coração. Vem conhecer!' },
        { elemento: document.querySelector('h2.text-center'), texto: 'Veja alguns de nossos projetos' },
        { elemento: document.querySelector('#videos-aguia'), texto: 'Vídeos; Acolhimento Águia; Atividade de desenvolvimento; Leitura; A-E-I-O-U; Canção de Páscoa; Gincana Animada' },
        { elemento: document.querySelector('.method'), texto: 'Metodologia e Filosofia; Base de valores: visão cristã, com princípios de respeito, amizade e responsabilidade. Aprendizagem ativa: aluno participa, reflete e interage; não é só ouvir, é experimentar. Conteúdo com sentido: organizado e ligado ao dia a dia da criança. Alfabetização fônica: leitura e escrita a partir da relação entre sons e letras. Materiais variados: livros, histórias auditivas e recursos lúdicos impressos. Literatura Viva: histórias que despertam imaginação e estimulam leitura. Linguagem e matemática na prática: sempre com jogos e atividades que envolvem a criança. Tecnologia e criatividade: espaços maker, projetos STEAM Kids e metodologias divertidas. Formação integral: trabalha corpo, pensamento, emoções e convivência.' },
        { elemento: document.querySelector('footer'), texto: 'Rodapé; Colégio Águia Azul; Ligar para (11) 4667-9466; Redes sociais; Venha nos visitar; Localização; Rua Gibraltar, Itapecerica da Serra' },
        { elemento: document.querySelector('.container.text-center > .row'), texto: 'Galeria de fotos fixas; Cognitivo; Aprendendo; Maternal; meninas; judo; bobbie-goods; branca-de-neve; frutas-vermelhas; pascoa' }
    ];

    // Oculta todas as seções visíveis, exceto o cabeçalho
    function esconderTudo() {
        conteudosPesquisaveis.forEach(item => {
            if (item.elemento) {
                item.elemento.style.display = 'none';
            }
        });
    }

    // Escuta o evento de 'submit' do formulário
    if (formularioDePesquisa) {
        formularioDePesquisa.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio do formulário padrão
            const termo = campoDePesquisa.value.toLowerCase();
            
            // Se o campo estiver vazio, mostra tudo de novo
            if (termo === '') {
                conteudosPesquisaveis.forEach(item => {
                    if (item.elemento) {
                        item.elemento.style.display = 'block';
                    }
                });
                return;
            }

            esconderTudo(); // Esconde tudo antes de mostrar os resultados

            // Itera sobre os conteúdos para mostrar ou esconder
            conteudosPesquisaveis.forEach(item => {
                if (item.elemento) {
                    const textoDoItem = item.texto.toLowerCase();
                    if (textoDoItem.includes(termo)) {
                        item.elemento.style.display = 'block'; // Mostra o elemento
                    }
                }
            });
        });
    }
});