const form = document.getElementById('verifica-num')

function VerificaNum() {
    let valorA = document.getElementById('valor-a');
    let valorB = document.getElementById('valor-b');
    return valorA.value > valorB.value;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const valorMaior = document.getElementById('valor-a');
    const valA = document.getElementById('valor-a');
    const valB = document.getElementById('valor-b');
    const mensagemSucesso = `O valor A: <b>${valA.value}</b> é maior que o valor de B: <b>${valB.value}</b>`;
    const mensagemFalha = `O valor B: <b>${valB.value}</b> é maior que o valor de A: <b>${valA.value}</b>, tente outro número.`;
    
    formValido = VerificaNum(valorMaior.value)
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'inline-block';

        valA.value = '';
        valB.value = '';

    } else {
        const containerMensagemSucesso = document.querySelector('.fail-message');
        containerMensagemSucesso.innerHTML = mensagemFalha;
        containerMensagemSucesso.style.display = 'inline-block';
    }
})

console.log(form);