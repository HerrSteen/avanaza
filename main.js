"use strict";

const getValue = () => {
  const orderDepth = document.getElementsByClassName("order_depth")[0];
  const tr = orderDepth.getElementsByTagName("tr")[2];
  const tds = tr.getElementsByTagName("td");

  return {
    buyPrice: tds[1].innerHTML,
    sellPrice: tds[4].innerHTML,
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

const addButtons = () => {
  const buyButton = document.createElement("button");
  buyButton.classList.add("buyBtn");
  buyButton.innerHTML = "Säljarens pris";

  buyButton.addEventListener("click", (e) => {
    e.preventDefault();
    const v = getValue().sellPrice;
    updatePrice(v);
    triggerCalc();
  });

  const sellButton = document.createElement("button");
  sellButton.classList.add("sellBtn");
  sellButton.innerHTML = "Köparens pris";

  sellButton.addEventListener("click", (e) => {
    e.preventDefault();
    const v = getValue().buyPrice;
    updatePrice(v);
    triggerCalc();
  });

  const customInput = document.createElement("input");
  customInput.style.width = "44%";
  customInput.style.marginTop = "10px";

  customInput.addEventListener("keyup", () => {
    const volume = document.getElementById("volume");
    const price = document.getElementById("price");
    const ammount = Number(customInput.value);
    const priceVal = Number(price.value.replace(",", "."));

    volume.value = Math.floor(ammount / priceVal);
  });


  const pane = document.getElementsByClassName("buttonpane")[0];
  pane.appendChild(buyButton);
  pane.appendChild(sellButton);
  pane.appendChild(customInput);
};

addButtons();
