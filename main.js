"use strict";

const buttonContainer = document.getElementsByClassName("buttonpane")[0];
const inputContainer = document.getElementsByClassName("inputs3")[0];
const spreadContainer = document.getElementsByClassName("captionBar")[0];
const orderForm = document.getElementsByClassName("orderForm")[0];

const isBuySite = window.location.href.includes("kop");
const isSellSite = window.location.href.includes("salj");

addSpread(spreadContainer);

if (isBuySite) {
  const button = createButton(buttonContainer, "Säljarens pris", "buy", buttonClick);
  addSumInput(inputContainer);
  createLink(orderForm, "sälj", "salj");
  const sellButton = document.getElementsByClassName("sellBtn")[0];
  sellButton.parentNode.removeChild(sellButton);

} else if (isSellSite) {
  createButton(buttonContainer, "Köparens pris", "sell", buttonClick);
  createLink(orderForm, "köp", "kop");

  const buyButton = document.getElementsByClassName("buyBtn")[0];
  buyButton.parentNode.removeChild(buyButton);
}
