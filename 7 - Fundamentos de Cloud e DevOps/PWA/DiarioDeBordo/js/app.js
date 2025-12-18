import { obterEntradas, salvarEntradas } from './storage.js';
import { renderizarEntradas } from './ui.js';

const form = document.getElementById('form-atividade');
const tituloInput = document.getElementById('titulo');
const descricaoInput = document.getElementById('descricao');
const botaoInstalar = document.querySelector('.header__install-button');

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-Worker.js')
  .then(() => console.log('Service worker registrado'))
  .catch(err => console.error('Erro ao registrar o service worker:', err));
}

function atualizarUI() {
  const entradas = obterEntradas();
  renderizarEntradas(entradas, removerEntrada);
}

function adicionarEntrada(titulo, descricao) {
  const entradas = obterEntradas();

  entradas.push({
    titulo,
    descricao,
    data: new Date().toISOString()
  });

  salvarEntradas(entradas);
  atualizarUI();
}

function removerEntrada(index) {
  const entradas = obterEntradas();
  entradas.splice(index, 1);
  salvarEntradas(entradas);
  atualizarUI();
}

form.addEventListener('submit', event => {
  event.preventDefault();

  adicionarEntrada(
    tituloInput.value.trim(),
    descricaoInput.value.trim()
  );

  form.reset();
});

// PWA install
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  botaoInstalar.style.display = 'block';
})

botaoInstalar.addEventListener("click", (e) => {
  if(!deferredPrompt) return;

  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choice) => {
    console.log(choice.outcome);
    deferredPrompt = null;
    botaoInstalar.style.display = 'none';
  })
})

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;

  const btn = document.createElement('button');
  btn.textContent = 'Instalar aplicativo';

  btn.onclick = async () => {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    btn.remove();
  };

  document.body.appendChild(btn);
});

// Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}

document.addEventListener('DOMContentLoaded', atualizarUI);


