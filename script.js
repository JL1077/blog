
// Função para o Botão de Curtida
function computarCurtida(botao) {
    // Captura o elemento <span> dentro do botão que contém o número
    const contadorSpan = botao.querySelector('span');
    
    // Pega o número atual, transforma em número inteiro e soma +1
    let curtidasAtuais = parseInt(contadorSpan.innerText);
    curtidasAtuais++;
    
    // Atualiza o texto na tela
    contadorSpan.innerText = curtidasAtuais;
    
    // Efeito visual de clique no botão
    botao.style.transform = "scale(0.95)";
    setTimeout(() => {
        botao.style.transform = "scale(1)";
    }, 100);
}

// Função para o Botão de Comentário
function adicionarComentario(botao) {
    // Acha o campo de texto (input) que está logo antes do botão clicado
    const container = botao.parentElement;
    const input = container.querySelector('.input-comentario');
    const lista = container.querySelector('.lista-comentarios');
    
    // Verifica se o usuário não digitou apenas espaços vazios
    if (input.value.trim() === "") {
        alert("Por favor, digite um comentário antes de enviar!");
        return;
    }
    
    // Cria um novo item de lista (li) dinamicamente
    const novoComentario = document.createElement('li');
    novoComentario.innerText = input.value;
    
    // Adiciona o novo comentário na lista daquele card específico
    lista.appendChild(novoComentario);
    
    // Limpa o campo de texto para o próximo comentário
    input.value = "";
}
