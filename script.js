function gameBegin() {
  let randomNumber = Math.ceil(Math.random() * (100 - 1) + 1);
  let userInput;

  const getUserNumber = () => {
    userInput = prompt("Введите число от 1 до 100!");
  };

  const checkUserNumber = () => {
    if (userInput == null) {
      return alert("Игра закончена!");
    } else {
      if (userInput == randomNumber) {
        alert(`Поздравляем! Вы угадали`);
      } else if (userInput > randomNumber) {
        alert(`Загаданное число меньше!`);
        return askUser();
      } else if (userInput < randomNumber) {
        alert(`Загаданное число больше!`);
        return askUser();
      }
    }
  };

  const askUser = () => {
    getUserNumber();
    checkUserNumber();
  };
  askUser();
}
gameBegin(1, 100);
