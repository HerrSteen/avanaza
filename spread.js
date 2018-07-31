const addSpread = (container) => {
  const getSpread = () => {
    const prices = getPrices();
    let spread = (prices.buy - prices.sell) / prices.sell * 100;

    if (isNaN(spread)) {
      return "Ingen";
    }

    return `${Math.floor(spread * 100) / 100 * -1}%`;
  };

  const header = document.createElement("h2");
  header.classList.add("fRight");
  header.innerHTML = getSpread();

  container.appendChild(header);

  setInterval(() => {
    header.innerHTML = getSpread();
  }, 1000);
};
