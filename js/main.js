const form = document.getElementById('verifica-num');

function VerificaNum() {
    let valorA = parseInt(document.getElementById('valor-a').value);
    let valorB = parseInt(document.getElementById('valor-b').value);
    return valorA > valorB;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const valorMaior = document.getElementById('valor-a');
    var valA = document.getElementById('valor-a');
    var valB = document.getElementById('valor-b');
    var mensagemSucesso = `O valor A: <b>${valA.value}</b> é maior que o valor de B: <b>${valB.value}</b>`;
    var mensagemFalha = `O valor B: <b>${valB.value}</b> é maior que o valor de A: <b>${valA.value}</b>, tente outro número.`;
    
    formValido = VerificaNum(valorMaior.value)
    if (formValido) {
        var containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'inline-block';
        var containerMensagemFalha = document.querySelector('.fail-message');
        containerMensagemFalha.innerHTML = mensagemFalha;
        containerMensagemFalha.style.display = 'none';
        

        valA.value = '';
        valB.value = '';
        

    } else {
        var containerMensagemFalha = document.querySelector('.fail-message');
        containerMensagemFalha.innerHTML = mensagemFalha;
        containerMensagemFalha.style.display = 'inline-block';
        var containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'none';

        valA.value = '';
        valB.value = '';
        
    }
})