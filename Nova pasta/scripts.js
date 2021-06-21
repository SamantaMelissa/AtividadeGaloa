function leiaMais() {
    const tresPontos = document.getElementById('tresPontos');
    const mostrarMais = document.getElementById('mostrarMais');
    const btnLeiaMais = document.getElementById('btnLeiaMais');

    if (tresPontos.style.display === 'none') {
        tresPontos.style.display = 'inline';
        mostrarMais.style.display = 'none';
        btnLeiaMais.innerHTML = 'ver mais';
    } else {
        tresPontos.style.display = 'none';
        mostrarMais.style.display = 'inline';
        btnLeiaMais.innerHTML = 'ver menos';
    }
}

function abrir() {
    const formulario = document.getElementById('formulario')
    const criarTopico = document.getElementById('criarTopico')
    const criandoTopico = document.getElementById('criandoTopico')

    if (criandoTopico.style.display === 'none') {
        formulario.style.display = 'none';
        criarTopico.style.display = 'inline';
    } else {
        criandoTopico.style.display = 'none'
        formulario.style.display = 'inline';
        criarTopico.style.display = 'none';

    }

}



let assunto = getElementById('assunto')
let lerAssunto = getElementById('lerAssunto')



function lendoAssunto() {
        var x = document.getElementById("meuAssunto").value;
        document.getElementById("escreverAssunto").innerHTML = x;

        var x = document.getElementById("meuConteudo").value;
        document.getElementById("escreverConteudo").innerHTML = x;

        var x = document.getElementById("meuNome").value;
        document.getElementById("escreverNome").innerHTML = x;
      }
