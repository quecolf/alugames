function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
        imagem.classList.remove('dashboard__item__img--rented');
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
    }
}