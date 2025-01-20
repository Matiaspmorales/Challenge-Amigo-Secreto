// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    if (document.getElementById('amigo').value == ''){
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(document.getElementById('amigo').value)
        document.getElementById('amigo').value = '';
        // console.log() para validar que la lista contenga elementos
        console.log(amigos)
        recorrerArray();
    }
}


function recorrerArray(){
    let listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = "";
    for (amigo of amigos){
        let nuevo_elemento = document.createElement('li');
        nuevo_elemento.textContent = amigo;
        listaAmigos.appendChild(nuevo_elemento);
    }
}