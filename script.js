function animarDivs() {
    document.querySelector('.container').classList.toggle('ativa');
}

document.querySelector('.container-imagem').addEventListener('click', animarDivs);
