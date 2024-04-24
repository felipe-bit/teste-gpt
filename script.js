let score = 0;
let bombs = 0;
let phase = 1;
let clickedItems = [];

function updateScore() {
    document.getElementById('score').textContent = `Pontuação: ${score}`;
}

function createGridItem() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = '?'; // Mostra apenas o ponto de interrogação
    gridItem.addEventListener('click', function() {
        if (clickedItems.includes(gridItem)) {
            return; // Se já foi clicado, não faz nada
        }
        clickedItems.push(gridItem);
        if (phase === 1 && Math.random() < 0.07) { // 2 bombas em 30 retângulos
            gridItem.textContent = 'Boooom!';
            setTimeout(() => {
                alert('Boooom! Você perdeu!');
                score = 0;
                bombs = 0;
                phase = 1;
                clickedItems = [];
                setupGrid();
            }, 100); // Mostra a mensagem e reinicia o jogo após 100ms
        } else if (phase === 2 && Math.random() < 0.15) { // 3 bombas em 20 retângulos
            gridItem.textContent = 'Boooom!';
            setTimeout(() => {
                alert('Boooom! Você perdeu!');
                score = 0;
                bombs = 0;
                phase = 1;
                clickedItems = [];
                setupGrid();
            }, 100); // Mostra a mensagem e reinicia o jogo após 100ms
        } else {
            score++;
            updateScore();
            gridItem.classList.add('clicked');
            if (score === 10 && bombs === 2 && phase === 1) { // Avança para fase 2
                setTimeout(() => {
                    alert('Parabéns! Você avançou para a fase 2!');
                    phase = 2;
                    score = 0;
                    bombs = 0;
                    clickedItems = [];
                    setupGrid();
                }, 100); // Mostra a mensagem e avança para fase 2 após 100ms
            } else if (score === 10 && bombs === 3 && phase === 2) { // Ganha o jogo
                setTimeout(() => {
                    alert('Parabéns! Você venceu o jogo!');
                    score = 0;
                    bombs = 0;
                    phase = 1;
                    clickedItems = [];
                    setupGrid();
                }, 100); // Mostra a mensagem e reinicia o jogo após 100ms
            }
        }
    });
    return gridItem;
}

function setupGrid() {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; // Limpa o container
    let gridSize = phase === 1 ? 30 : 20;
    for (let i = 0; i < gridSize; i++) {
        const gridItem = createGridItem();
        gridContainer.appendChild(gridItem);
    }
}

setupGrid();
function createProfile() {
    const profile = document.createElement('div');
    profile.classList.add('profile');
    profile.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`; // Cor de fundo aleatória
    profile.addEventListener('mouseover', function() {
        profile.classList.add('hovered');
    });
    profile.addEventListener('mouseout', function() {
        profile.classList.remove('hovered');
    });
    return profile;
}

function setupProfileGrid() {
    const profileContainer = document.getElementById('profileContainer');
    profileContainer.innerHTML = ''; // Limpa o container
    for (let i = 0; i < 4; i++) {
        const profile = createProfile();
        profileContainer.appendChild(profile);
    }
}

setupProfileGrid();
function setupGrid() {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; // Limpa o container
    let gridSize = phase === 1 ? 30 : 20;
    for (let i = 0; i < gridSize; i++) {
        const gridItem = createGridItem();
        gridContainer.appendChild(gridItem);
    }
}

function createGridItem() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = '?'; // Mostra apenas o ponto de interrogação
    gridItem.addEventListener('click', function() {
        if (clickedItems.includes(gridItem)) {
            return; // Se já foi clicado, não faz nada
        }
        clickedItems.push(gridItem);
        if (phase === 1 && Math.random() < 0.07) { // 2 bombas em 30 retângulos
            gridItem.textContent = 'Boooom!';
            setTimeout(() => {
                alert('Boooom! Você perdeu!');
                score = 0;
                bombs = 0;
                phase = 1;
                clickedItems = [];
                setupGrid();
            }, 100); // Mostra a mensagem e reinicia o jogo após 100ms
        } else if (phase === 2 && Math.random() < 0.15) { // 3 bombas em 20 retângulos
            gridItem.textContent = 'Boooom!';
            setTimeout(() => {
                alert('Boooom! Você perdeu!');
                score = 0;
                bombs = 0;
                phase = 1;
                clickedItems = [];
                setupGrid();
            }, 100); // Mostra a mensagem e reinicia o jogo após 100ms
        } else {
            score++;
            updateScore();
            gridItem.classList.add('clicked');
            if (score === 10 && phase === 1) { // Avança para fase 2
                setTimeout(() => {
                    alert('Parabéns! Você avançou para a fase 2!');
                    phase = 2;
                    score = 0;
                    bombs = 0;
                    clickedItems = [];
                    setupGrid();
                }, 100); // Mostra a mensagem e avança para fase 2 após 100ms
            } else if (score === 10 && phase === 2) { // Ganha o jogo
                setTimeout(() => {
                    alert('Parabéns! Você venceu o jogo!');
                    score = 0;
                    bombs = 0;
                    phase = 1;
                    clickedItems = [];
                    setupGrid();
                }, 100); // Mostra a mensagem e reinicia o jogo após 100ms
            }
        }
    });
    return gridItem;
}
