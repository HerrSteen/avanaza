let interval;

const createButton = (container, text, type, onClick) => {
  const button = document.createElement("button");
  // button.classList.add("buyBtn");
  button.innerHTML = text;
  button.dataset.type = type;
  button.style.backgroundColor = "#ccac00";
  button.style.borderColor = "#ccac00";
  button.style.color = "#fff";
  button.style.outline = "none";
  button.style.marginLeft = "0";

  button.addEventListener("click", onClick);
  container.appendChild(button);
};

const buttonClick = (e) => {
  e.preventDefault();
  if (!e.target) return;

  const trigger = () => {
    const type = e.target.dataset.type;
    const price = getPrices()[type];
    updatePrice(price);
    triggerCalc();
  }

  if (interval) {
    e.target.style.backgroundColor = "#ccac00";
    e.target.style.borderColor = "#ccac00";
     clearInterval(interval);
    interval = null;
    return;
  }

  e.target.style.backgroundColor = "#565654";
  e.target.style.borderColor = "#565654";
  trigger();
  interval = setInterval(trigger, 1000);
};
