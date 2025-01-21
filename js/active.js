function showCards(section, btn) {
    // Oculta todas as seções
    document.querySelectorAll('.cards').forEach(div => div.classList.remove('show'));

    // Exibe apenas a seção clicada
    document.getElementById(section).classList.add('show');

    // Remove a classe 'active' de todos os botões
    document.querySelectorAll('.option').forEach(button => button.classList.remove('active'));

    // Adiciona 'active' no botão clicado
    btn.classList.add('active');
}
function showBanco(section, btn) {
    // Oculta todas as seções
    document.querySelectorAll('.banco-rolagem').forEach(div => div.classList.remove('show'));

    // Exibe apenas a seção clicada
    document.getElementById(section).classList.add('show');

    // Remove a classe 'active' de todos os botões
    document.querySelectorAll('.option-banco').forEach(button => button.classList.remove('active'));

    // Adiciona 'active' no botão clicado
    btn.classList.add('active');
}
