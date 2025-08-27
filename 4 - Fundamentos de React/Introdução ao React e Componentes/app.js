const app = document.getElementById('app');

const rotas = {
    '/': `
    <h2>Bem-vindo à página inicial!</h2>
    <p>Esta é uma aplicação SPA sem React, utlizando apenas JavaScript</p>
    `,
    'servicos':`
    <h2>Serviços</h2>
    <p>Essa página explica sobre nossos serviços.</p>
    `,
    'contact':`
    <h2>Fale Conosco</h2>
    <p>Entre em contato pelo formulário ou redes sociais.</p>
    `
};

function navegar() {
    const rotaAtual = location.hash.replace('#/', '') || '/';
    app.innerHTML = rotas[rotaAtual] || '<h2>Página não encontrada</h2>';
}

window.addEventListener('load', navegar);
window.addEventListener('hashchange', navegar);