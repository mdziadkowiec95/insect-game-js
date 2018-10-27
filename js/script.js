

const gameBox = document.querySelector('.game-box');
const newInsect = document.createElement('div');
const scoreNumber = document.querySelector('.score-number');

let score = 0;

gameInit();

function updateScore() {
  score++;
  scoreNumber.textContent = score;
}

function catchInsect() {
  newInsect.classList.add('caught');

  updateScore();

}

function gameInit() {
  let width = window.innerWidth;
  let height = window.innerHeight;

  newInsect.className = 'insect free';
  newInsect.addEventListener('click', catchInsect);

  gameBox.appendChild(newInsect);

  var timer = setInterval(function () {
    changePosition(width, height)
  }, 2000);
}


function changePosition(width, height) {

  let randomX = Math.floor(Math.random() * width);
  let randomY = Math.floor(Math.random() * height);

  newInsect.style.setProperty('top', (randomY - 30) + 'px');
  newInsect.style.setProperty('left', (randomX - 30) + 'px');
  newInsect.classList.remove('caught');

}

