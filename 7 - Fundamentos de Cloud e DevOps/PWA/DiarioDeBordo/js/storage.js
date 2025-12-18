const STORAGE_KEY = 'diarioDeBordo';

export function obterEntradas() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function salvarEntradas(entradas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entradas));
}
