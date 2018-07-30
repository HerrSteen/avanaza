"use strict";

const pane = document.getElementsByClassName("buttonpane")[0];

const getValue = () => {
  const orderDepth = document.getElementsByClassName("order_depth")[0];
  const tr = orderDepth.getElementsByTagName("tr")[2];
  const tds = tr.getElementsByTagName("td");

  return {
    buyPrice: Number(tds[1].innerHTML.replace(",", ".")),
    sellPrice: Number(tds[4].innerHTML.replace(",", ".")),
  }
};

const triggerCalc = () => {
  const el = document.getElementById("volume");
  const e = document.createEvent("HTMLEvents");
  e.initEvent("keyup", true, false);
  el.dispatchEvent(e);
};

const updatePrice = (price) => {
  const priceEl = document.getElementById("price");
  priceEl.value = price;
};

const addBuyButton = () => {
  const buyButton = document.createElement("button");
  buyButton.classList.add("buyBtn");
  buyButton.innerHTML = "Säljarens pris";

  const updatePriceEvent = () => {
    const v = getValue().sellPrice;
    updatePrice(v);
    triggerCalc();
  };

  buyButton.addEventListener("click", (e) => {
    e.preventDefault();
    updatePriceEvent();
    setInterval(updatePriceEvent, 1000);
  });

  pane.appendChild(buyButton);
};

const addSellButton = () => {
  const sellButton = document.createElement("button");
  sellButton.classList.add("sellBtn");
  sellButton.innerHTML = "Köparens pris";

  const updatePrice = () => {
    const v = getValue().buyPrice;
    updatePriceEvent(v);
    triggerCalc();
  };

  sellButton.addEventListener("click", (e) => {
    e.preventDefault();
    updatePriceEvent();
    setInterval(updatePriceEvent, 1000);
  });

  pane.appendChild(sellButton);
};

const addCustomInput = () => {
  const label = document.createElement("label");
  label.innerHTML = "Summa";
  label.style.marginTop = "10px";
  label.style.marginLeft = "6px";

  const customInput = document.createElement("input");
  customInput.style.width = "44%";

  customInput.addEventListener("keyup", () => {
    const volume = document.getElementById("volume");
    const price = document.getElementById("price");
    const ammount = Number(customInput.value);
    const priceVal = Number(price.value.replace(",", "."));

    volume.value = Math.floor(ammount / priceVal);
  });

  pane.appendChild(label);
  pane.appendChild(customInput);
};

const addSpread = () => {
  const getSpread = () => {
    const prices = getValue();
    let spread = (prices.buyPrice - prices.sellPrice) / prices.sellPrice * 100;
    return Math.floor(spread * 100) / 100 * -1;
  };

  const header = document.createElement("h2");
  header.classList.add("fRight");
  header.innerHTML = `${getSpread()}%`;

  const container = document.getElementsByClassName("captionBar")[0];
  container.appendChild(header);

  setInterval(() => {
    console.log("i interval", getSpread());
    header.innerHTML = `${getSpread()}%`;
  }, 1000);
};

if (window.location.href.includes("kop")) {
  addBuyButton();
  addCustomInput();
} else if (window.location.href.includes("salj")) {
  addSellButton();
}
addSpread();
