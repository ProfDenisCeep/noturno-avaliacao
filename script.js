//teste de ia para gerar página web//


// ==========================================================================
// script.js - Comportamento do Menu Mobile (Hamburguer)
// ==========================================================================

// Seleciona o botão hamburguer e o menu de navegação
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Ao clicar no botão hamburguer, alterna a classe "active"
// que controla a exibição do menu em telas pequenas (ver CSS)
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fecha o menu automaticamente ao clicar em um link
// (melhora a experiência em dispositivos móveis)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==========================================================================
// Validação simples do formulário de contato
// ==========================================================================
const formContato = document.getElementById('form-contato');

formContato.addEventListener('submit', (e) => {
    e.preventDefault(); // impede o envio real (não há backend neste exemplo)

    // Pega os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verificação básica de preenchimento
    if (nome && email && mensagem) {
        // Monta o link "mailto" para abrir o cliente de e-mail do usuário
        // com os dados do formulário já preenchidos
        const destinatario = 'denis.moraes@escola.pr.gov.br';
        const assunto = `Contato pelo site - ${nome}`;
        const corpo = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`;

        const linkMailto = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

        // Abre o aplicativo de e-mail padrão do usuário
        window.location.href = linkMailto;

        alert('Seu aplicativo de e-mail será aberto para finalizar o envio da mensagem.');
        formContato.reset(); // limpa o formulário
    } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
});