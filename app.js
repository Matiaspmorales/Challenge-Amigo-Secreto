// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    if (document.getElementById('amigo').value == ''){
        alert('Por favor, inserte un nombre.');
        sortearAmigo()
    }else{
        amigos.push(document.getElementById('amigo').value)
        document.getElementById('amigo').value = '';
        sortearAmigo()
        recorrerArray();
    }
}


function recorrerArray(){
    resultado.innerHTML = "";
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (amigo of amigos){
        let nuevo_elemento = document.createElement('li');
        nuevo_elemento.textContent = amigo;
        listaAmigos.appendChild(nuevo_elemento);
    }
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert('No hay amigos en la lista para sortear');
    }

    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    let resultado = document.getElementById('resultado');
    let amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = "";
    let nuevo_elemento = document.createElement('li');
    nuevo_elemento.textContent = amigoSorteado;
    resultado.appendChild(nuevo_elemento);
    listaAmigos.innerHTML = "";
}