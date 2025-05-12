let btnModifica = document.getElementById('btnModifica');//let cria uma variavel
let titulo = document.getElementById('titulo');

//escuta o botão, e quando acontece o click, tudo entre chaves vai acontecer
btnModifica.addEventListener('click',funcaomodifcar);
    function funcaomodifcar () {
        titulo.textContent = 'foi modificado';
        titulo.classList.toggle('active')
        titulo.classList.add('')
        titulo.classList.remove('')
}
