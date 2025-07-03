const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", ()=> {

    // Verificar se o usuário já tem um tema pré-definido
    const temaAtual = localStorage.getItem("Tema");
    // Verificar qual é o tema e inverter
    const novoTema = temaAtual === "dark" ? "light" : "dark";

    // Adicionar a classe dark no elemento body
    document.body.classList.toggle(novoTema); // Pega o document(HTML) e pegamos o filho que é o BODY e pegamos a lista de CLASSE que ele tem, e adicionamos o ADD para adicionar a classe

    //Salvar as preferências no LocalStorage
    localStorage.setItem("tema", novoTema);

    // Atualiza o texto do botão
    botaoTema.textContent = novoTema === "dark" ? '☉' : '☾';
})

document.addEventListener('DOMContentLoaded', () => {
    //Verificar se tem tema salvo
    const temaSalvo = localStorage.getItem("tema");

    if(temaSalvo === "dark") {
        document.body.classList.add("dark");
        botaoTema.textContent = '☉';
    }else{
        //Caso contrário é light e o botão deve ser para mudar para dark
        botaoTema.textContent = '☾';
    }
})