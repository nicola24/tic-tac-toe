let count = 0;
const r1c1 = document.getElementById('r1c1');
const r1c2 = document.getElementById('r1c2');
const r1c3 = document.getElementById('r1c3');
const r2c1 = document.getElementById('r2c1');
const r2c2 = document.getElementById('r2c2');
const r2c3 = document.getElementById('r2c3');
const r3c1 = document.getElementById('r3c1');
const r3c2 = document.getElementById('r3c2');
const r3c3 = document.getElementById('r3c3');
const player = document.getElementById('player');
const score = document.getElementById('score');
const winX = 'GAME OVER X WINNER!';
const winO = 'GAME OVER O WINNER!';

// function that toggle X or O when a square is clicked
const toggle = (square) => {
  // toggle O/X
  square.addEventListener('click', () => {
    // if square empty then print X or O
    if (square.innerHTML === '') {
      count += 1;
      if (count % 2 === 0) {
        square.innerHTML = 'O';
        player.innerHTML = 'X Turn';
      } else {
        square.innerHTML = 'X';
        player.innerHTML = 'O Turn';
      }
    }
    // row X
    if (r1c1.innerHTML === 'X' && r1c2.innerHTML === 'X' && r1c3.innerHTML === 'X') {
      score.innerHTML = winX;
    }
    if (r2c1.innerHTML === 'X' && r2c2.innerHTML === 'X' && r2c3.innerHTML === 'X') {
      score.innerHTML = winX;
    }
    if (r3c1.innerHTML === 'X' && r3c2.innerHTML === 'X' && r3c3.innerHTML === 'X') {
      score.innerHTML = winX;
    }
    // column X
    if (r1c1.innerHTML === 'X' && r2c1.innerHTML === 'X' && r3c1.innerHTML === 'X') {
      score.innerHTML = winX;
    }
    if (r1c2.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c2.innerHTML === 'X') {
      score.innerHTML = winX;
    }
    if (r1c3.innerHTML === 'X' && r2c3.innerHTML === 'X' && r3c3.innerHTML === 'X') {
      score.innerHTML = winX;
    }
    // diagonal X
    if (r1c1.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c3.innerHTML === 'X') {
      score.innerHTML = winX;
    }
    if (r1c3.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c1.innerHTML === 'X') {
      score.innerHTML = winX;
    }
    // row O
    if (r1c1.innerHTML === 'O' && r1c2.innerHTML === 'O' && r1c3.innerHTML === 'O') {
      score.innerHTML = winO;
    }
    if (r2c1.innerHTML === 'O' && r2c2.innerHTML === 'O' && r2c3.innerHTML === 'O') {
      score.innerHTML = winO;
    }
    if (r3c1.innerHTML === 'O' && r3c2.innerHTML === 'O' && r3c3.innerHTML === 'O') {
      score.innerHTML = winO;
    }
    // column O
    if (r1c1.innerHTML === 'O' && r2c1.innerHTML === 'O' && r3c1.innerHTML === 'O') {
      score.innerHTML = winO;
    }
    if (r1c2.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c2.innerHTML === 'O') {
      score.innerHTML = winO;
    }
    if (r1c3.innerHTML === 'O' && r2c3.innerHTML === 'O' && r3c3.innerHTML === 'O') {
      score.innerHTML = winO;
    }
    // diagonal O
    if (r1c1.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c3.innerHTML === 'O') {
      score.innerHTML = winO;
    }
    if (r1c3.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c1.innerHTML === 'O') {
      score.innerHTML = winO;
    }
    // draw case
    if (count === 9) {
      score.innerHTML = 'It\'s a draw!';
    }
  }, false);
};

// reset board button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  r1c1.innerHTML = '';
  r1c2.innerHTML = '';
  r1c3.innerHTML = '';
  r2c1.innerHTML = '';
  r2c2.innerHTML = '';
  r2c3.innerHTML = '';
  r3c1.innerHTML = '';
  r3c2.innerHTML = '';
  r3c3.innerHTML = '';
  score.innerHTML = '';
  count = 0;
  player.innerHTML = 'X Turn';
}, false);

toggle(r1c1);
toggle(r1c2);
toggle(r1c3);
toggle(r2c1);
toggle(r2c2);
toggle(r2c3);
toggle(r3c1);
toggle(r3c2);
toggle(r3c3);
