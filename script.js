// ==========================================================================
// script.js - Comportamento do Menu Mobile (Hamburguer)
// ==========================================================================

// Elementos do DOM
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const formContato = document.getElementById('form-contato');

// Verificação de existência dos elementos antes de adicionar listeners
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

if (navLinks && navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) menuToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
}

// ==========================================================================
// Validação do formulário de contato
// ==========================================================================

if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const mensagem = document.getElementById('mensagem')?.value.trim();

        // Validação básica
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        // Validação de email simples
        if (!isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Enviar via mailto
        const destinatario = 'denis.moraes@escola.pr.gov.br';
        const assunto = `Contato pelo site - ${nome}`;
        const corpo = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`;
        const linkMailto = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

        window.location.href = linkMailto;
        alert('Seu aplicativo de e-mail será aberto para finalizar o envio da mensagem.');
        formContato.reset();
    });
}

// ==========================================================================
// Função de validação de email
// ==========================================================================
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}