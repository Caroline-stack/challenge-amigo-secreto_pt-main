const listaDeAmigos = [];
function adicionarAmigo() {
    const input = document.getElementById('amigo'); 
    const lista = document.getElementById('listaAmigos'); 
    const nome = input.value.trim(); 

     if (nome !== '') {       
        listaDeAmigos.push(nome);        
        const item = document.createElement('li');
        item.textContent = nome;       
        lista.appendChild(item);       
        input.value = '';
        input.focus(); 
    } else {
        alert('Por favor, digite o nome de um amigo antes de adicionar!');
    }
}
