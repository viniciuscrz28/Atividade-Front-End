function revelar() {
    // 1. Atualizar a Imagem do Jogador
    const imgPrincipal = document.querySelector('.card-img-top');
    imgPrincipal.src = 'img/_vinicius_junior.png';

    // 2. Localizar os elementos do DOM
    const nomeSpan = document.querySelector('#Nome span.placeholder');
    const rankSpan = document.getElementById('Rank');
    const dataNasSpan = document.getElementById('Data_Nas');
    const alturaSpan = document.getElementById('Alutra');
    const posicaoSpan = document.getElementById('Posição '); // Mantendo o ID com espaço conforme seu HTML

    // 3. Substituir os conteúdos textuais
    if (nomeSpan) nomeSpan.textContent = "Vinícius José Paixão de Oliveira Júnior";
    if (rankSpan) {
        rankSpan.textContent = "9,5";
        rankSpan.classList.replace('text-bg-secondary', 'text-bg-warning'); // Destaque para o Rank
    }
    if (dataNasSpan) dataNasSpan.textContent = "12/07/2000 (25 anos)";
    if (alturaSpan) alturaSpan.textContent = "1,76 m";
    if (posicaoSpan) posicaoSpan.textContent = "Ponta-esquerda / Atacante";

    // 4. Limpeza de Classes (Remove o efeito de "carregando" e aplica o estilo final)
    const elementosPlaceholder = document.querySelectorAll('.placeholder');
    elementosPlaceholder.forEach(el => {
        el.classList.remove('placeholder');
        el.classList.add('card-text'); // Aplica a classe de texto do card
    });

    const elementosGlow = document.querySelectorAll('.placeholder-glow');
    elementosGlow.forEach(el => {
        el.classList.remove('placeholder-glow');
    });

    // 5. Ajuste no botão (Opcional: desabilitar após revelar)
    const botao = document.querySelector('a.btn-primary');
    botao.textContent = "Perfil Revelado";
    botao.classList.add('disabled');
    botao.style.backgroundColor = '#28a745'; // Muda para verde
    botao.style.borderColor = '#28a745';
}