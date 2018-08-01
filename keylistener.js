
const addKeyListener = () => {
  const acceptedNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const multiply = { h: 100, k: 1000 };
  let numbersPressed;

  const hasNumbersPressed = () => {
    return numbersPressed && numbersPressed.length;
  };

  const updateNumbersPressed = (num) => {
    if (numbersPressed && numbersPressed.length) {
      numbersPressed = `${numbersPressed}${num}`;
      return;
    }

    numbersPressed = num;
  };

  document.addEventListener("keydown", (e) => {
    if (acceptedNumbers.includes(e.key)) {
      updateNumbersPressed(e.key);
      return;
    }

    if (!hasNumbersPressed()) return;

    if (e.key === "k" || e.key === "h") {
      const sum = numbersPressed * multiply[e.key];
      calcNumberOfStocks(sum);
      triggerCalc();
    }

    numbersPressed = "";
  });
};
