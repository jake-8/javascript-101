let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

  function updateScore() {
  document.querySelector('.score-display')
    .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}.`;
}

  updateScore();

  function pickComputerMove() {
    const randomNum = Math.random();

    let computerMove = '';

    if (randomNum >= 0 && randomNum < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
      computerMove = 'paper';
    } else if(randomNum >= 2 / 3 && randomNum < 1) {
      computerMove = 'scissors';
    }
    return computerMove;
  }

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = ''

    if (playerMove === computerMove) {
      result = 'Tie.'

    } else {
      
      if (playerMove === 'rock') {

        if (computerMove === 'scissors') {
          result = 'You win!';

        } else if (computerMove === 'paper') {
          result = 'You lose!';
        }

      } else if (playerMove === 'paper') {

          if (computerMove === 'rock') {
            result = 'You win!';

          } else if (computerMove === 'scissors') {
            result = 'You lose!';
          }

      } else if (playerMove === 'scissors') {

          if (computerMove === 'paper') {
            result = 'You win!';

          } else if (computerMove === 'rock') {
            result = 'You lose!';
          }
      }
    } 
    
    if (result === 'You win!') {
      score.wins += 1;

    } else if (result === 'You lose!') {
      score.loses += 1;

    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    updateScore();

    localStorage.setItem(
      'score', JSON.stringify(score));

    document.querySelector('.result-display')
      .innerHTML = result;

    document.querySelector('.moves-display').innerHTML = 
      `You <img class="icon" src="images/${playerMove}-emoji.png">
       <img class="icon" src="images/${computerMove}-emoji.png"> computer`;

  }
