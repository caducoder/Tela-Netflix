//modal
var modal = document.getElementById('myModal');

//botão que abre o modal
var btn = document.getElementById('myBtn');

//o span que fecha o modal
var span = document.getElementsByClassName('close')[0];

// Quando o usuário clicar no botão, abrirá o modal
btn.onclick = function() {
    modal.style.display = "block";
}

//botão pra fechar o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Clicando em qualquer lugar fora do modal, irá fecha-lo
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}