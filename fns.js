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

const calcNumberOfStocks = (amount) => {
  const volume = document.getElementById("volume");
  const price = document.getElementById("price");
  const priceVal = Number(price.value.replace(",", "."));

  volume.value = Math.ceil(amount / priceVal);
};

const removeElement = (className) => {
  const el = document.getElementsByClassName(className)[0];
  if (!el) return null;
  el.parentNode.removeChild(el);
};

const renameElement = (curr, next) => {
  const el = document.getElementsByClassName(curr)[0];
  el.classList.add(next);
};

