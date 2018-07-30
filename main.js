"use strict";

const buttonContainer = document.getElementsByClassName("buttonpane")[0];
const inputContainer = document.getElementsByClassName("inputs3")[0];
const spreadContainer = document.getElementsByClassName("captionBar")[0];
const orderForm = document.getElementsByClassName("orderForm")[0];

const isBuySite = window.location.href.includes("kop");
const isSellSite = window.location.href.includes("salj");

const removeElement = (className) => {
  const el = document.getElementsByClassName(className)[0];
  if (!el) return null;
  el.parentNode.removeChild(el);
};

const renameElement = (curr, next) => {
  const el = document.getElementsByClassName(curr)[0];
  el.classList.add(next);
};

removeElement("transferLinks");
removeElement("grid_5");
renameElement("grid_7", "grid_12");

addSpread(spreadContainer);

if (isBuySite) {
  const button = createButton(buttonContainer, "Säljarens pris", "buy", buttonClick);
  addSumInput(inputContainer);
  removeElement("sellBtn");
  createLink(orderForm, "sälj", "salj");
} else if (isSellSite) {
  createButton(buttonContainer, "Köparens pris", "sell", buttonClick);
  createLink(orderForm, "köp", "kop");
  removeElement("avanzabank_transfer_links");

  removeElement("buyBtn");
}
