
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
    let mensagemListaVazia = document.getElementById('mensagemListaVazia'); 

    if (nome === "") {      
        mensagemErro.textContent = "Por favor, insira um nome válido!";
        mensagemErro.classList.add("visivel");
    } else {      
        amigos.push(nome);      
        atualizarLista();      
        input.value = "";
        input.focus();

        mensagemErro.textContent = "";
        mensagemErro.classList.remove("visivel");
       
        if (amigos.length === 1) {
            mensagemListaVazia.textContent = "";
            mensagemListaVazia.classList.remove("visivel");
        }
    }
}
function sortearAmigo() {
    let mensagemListaVazia = document.getElementById('mensagemListaVazia'); 
    if (amigos.length === 0) {      
        mensagemListaVazia.textContent = "A lista de amigos está vazia! Adicione amigos antes de sortear.";
        mensagemListaVazia.classList.add("visivel");
        return;
    }   
    mensagemListaVazia.textContent = "";
    mensagemListaVazia.classList.remove("visivel");

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);   
    let amigoSorteado = amigos[indiceAleatorio];   
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `🎉 Amigo Sorteado: <strong>${amigoSorteado}</strong> 🎉`;
}
document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        adicionarAmigo(); 
    }
});
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && document.activeElement !== document.getElementById('amigo')) {
        sortearAmigo();
    }
});
