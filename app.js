let amigos = []; // Lista de amigos

// Função para adicionar o nome do amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();
    const erroMsg = document.getElementById('erro-msg');

    if (nomeAmigo === "") {
        // Exibe mensagem de erro caso o nome esteja em branco
        erroMsg.textContent = "É preciso adicionar um nome!";
        erroMsg.style.color = "red";
        return;
    }

    // Limpa a mensagem de erro se houver
    erroMsg.textContent = "";

    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = ''; // Limpa o campo de entrada

    // Atualiza a lista na interface
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; // Limpa a lista antes de atualizá-la

    amigos.forEach((amigo) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigosElement.appendChild(listItem);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Você precisa adicionar pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    // Sorteia um amigo aleatório
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `O amigo secreto sorteado é: <strong>${sorteado}</strong>`;
}
