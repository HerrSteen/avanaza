let interval;

const getPrices = () => {
  const orderDepth = document.getElementsByClassName("order_depth")[0];
  const tr = orderDepth.getElementsByTagName("tr")[2];
  const tds = tr.getElementsByTagName("td");

  return {
    buy: Number(tds[1].innerHTML.replace(",", ".")),
    sell: Number(tds[4].innerHTML.replace(",", ".")),
  }
};

const updatePrice = (price) => {
  const priceEl = document.getElementById("price");
  priceEl.value = price;
};

const triggerCalc = () => {
  const el = document.getElementById("volume");
  const e = document.createEvent("HTMLEvents");
  e.initEvent("keyup", true, false);
  el.dispatchEvent(e);
};

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
    console.log("---")
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
