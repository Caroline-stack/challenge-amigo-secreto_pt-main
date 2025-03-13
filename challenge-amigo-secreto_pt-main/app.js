
let amigos = [];
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');    
    lista.innerHTML = "";   
    for (let i = 0; i < amigos.length; i++) {      
        let item = document.createElement('li');
        item.textContent = amigos[i];            
        lista.appendChild(item);
    }
}
function adicionarAmigo() {
    let input = document.getElementById('amigo'); 
    let nome = input.value.trim();
    let mensagemErro = document.getElementById('mensagemErro');
    if (nome !== "") {
        amigos.push(nome); 
        atualizarLista(); 
        input.value = ""; 
        input.focus(); 
        mensagemErro.textContent = "";
        mensagemErro.classList.remove("visivel");
    } else {
        mensagemErro.textContent = "Por favor, insira um nome válido!";
        mensagemErro.classList.add("visivel");
}
}
function sortearAmigo() { 
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione amigos antes de sortear.");
        return;
    }  
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);   
    let amigoSorteado = amigos[indiceAleatorio];   
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `🎉 Amigo Sorteado: <strong>${amigoSorteado}</strong> 🎉`;
}
