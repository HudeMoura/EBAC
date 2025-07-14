//Funções Utilitárias

export function criarUsuarioObj(nome, email) {
  return { nome, email };
}

export function limparCampos(...inputs) {
  inputs.forEach(input => input.value = '');
}