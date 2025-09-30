document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DA BARRA DE PESQUISA ---
    const formularioDePesquisa = document.querySelector('form.d-flex');
    const campoDePesquisa = document.querySelector('input[type="search"]');

    // Mapeia todas as seções e seus textos para busca
    const conteudosPesquisaveis = [
        { elemento: document.querySelector('#galeria-verificacao'), texto: 'Galeria de fotos carrossel' },
        { elemento: document.querySelector('h1#list-menu'), texto: 'Carinho e Amor é o nosso lema' },
        { elemento: document.querySelector('h2:contains("Escola de Educação Infantil e Fundamental")'), texto: 'Escola de Educação Infantil e Fundamental' },
        { elemento: document.querySelector('h1.article'), texto: 'Educação com carinho e amor' },
        { elemento: document.querySelector('section > p'), texto: document.querySelector('section > p').textContent },
        { elemento: document.querySelector('h2.text-center'), texto: 'Veja alguns de nossos projetos' },
        { elemento: document.querySelector('.method h1.subtitle-aguia'), texto: 'EDUCAÇÃO, FERRAMENTA PARA TRANSFORMAÇÃO' },
        { elemento: document.querySelector('.method h2.subtitle-aguia'), texto: 'Metodologia e Filosofia' },
        { elemento: document.querySelector('section.method'), texto: 'Base de valores; Aprendizagem ativa; Conteúdo com sentido; Alfabetização fônica; Materiais variados; Literatura Viva; Linguagem e matemática na prática; Tecnologia e criatividade; Formação integral.' },
    ];
    
    // Escuta o evento de 'submit' do formulário
    formularioDePesquisa.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário padrão
        const termo = campoDePesquisa.value.toLowerCase();
        
        // Se o campo estiver vazio, mostra tudo de novo
        if (termo === '') {
            conteudosPesquisaveis.forEach(item => {
                if (item.elemento) {
                    item.elemento.style.display = 'block'; // Mostra o elemento
                }
            });
            // Oculta a galeria de imagens fixas, se necessário
            document.querySelector('.container.text-center > .row').parentNode.style.display = 'block';
            return;
        }

        // Itera sobre os conteúdos para mostrar ou esconder
        conteudosPesquisaveis.forEach(item => {
            if (item.elemento) {
                const textoDoItem = item.texto.toLowerCase();
                if (textoDoItem.includes(termo)) {
                    item.elemento.style.display = 'block'; // Mostra o elemento
                } else {
                    item.elemento.style.display = 'none'; // Esconde o elemento
                }
            }
        });

        // Lida com a visibilidade da galeria de imagens
        const galeriaImagensFixas = document.querySelector('.container.text-center > .row').parentNode;
        const textosGaleria = ['Cognitivo', 'Aprendendo', 'Maternal', 'meninas', 'judo', 'bobbie-goods', 'branca-de-neve', 'frutas-vermelhas', 'pascoa'];
        const galeriaTemResultado = textosGaleria.some(texto => texto.toLowerCase().includes(termo));
        if (galeriaTemResultado) {
            galeriaImagensFixas.style.display = 'block';
        } else {
            galeriaImagensFixas.style.display = 'none';
        }

    });
});