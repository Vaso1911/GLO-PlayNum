function gameRandomNumber() {
  const randomNumRender = Math.ceil(Math.random() * 100)
  let tries = 10;

  function playGame() {
    const userNum = +prompt(`Угадай число от 1 до 100 (попыток осталось: ${tries})`);

    if (userNum == false) {
      alert(`Спасибо. Игра окончена`);
      return;
    }

    if (isNaN(userNum)) {
      alert(`Введи число!`);
      playGame();

    } else if (userNum < randomNumRender) {
      tries--;
      if (tries === 0) {
        const playOrNot = confirm(`Это было число ${randomNumRender} Попытки закончились, хотите сыграть еще?`);
        if (playOrNot) {
          playGame();
        } else {
          alert(`Спасибо. Игра окончена`);
        }
      } else {
        alert(`Загаданное число больше, осталось попыток: ${tries}`);
        playGame();
      }

    } else if (userNum > randomNumRender) {
      tries--;
      if (tries === 0) {
        const playOrNot = confirm(`Это было число ${randomNumRender} Попытки закончились, хотите сыграть еще?`);
        if (playOrNot) {
          playGame();
        } else {
          alert(`Спасибо. Игра окончена`);
        }
      } else {
        alert(`Загаданное число меньше, осталось попыток: ${tries}`);
        playGame();
      }

    } else {
      const playAgain = confirm(`Поздравляю, Вы угадали число ${randomNumRender}!!! Хотели бы сыграть еще?`);
      if (playAgain) {
        playGame();
      } else {
        alert(`Спасибо. Игра окончена`);
      }
    }
  }

  playGame();
}

gameRandomNumber();




