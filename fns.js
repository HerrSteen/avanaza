const getPrices = () => {
  const orderDepth = document.getElementsByClassName("order_depth")[0];
  const tr = orderDepth.getElementsByTagName("tr")[2];
  const tds = tr.getElementsByTagName("td");

  let buy = tds[1].innerHTML;
  buy = buy.replace(",", ".");
  buy = buy.replace("*", "");
  buy = Number(buy);

  let sell = tds[4].innerHTML;
  sell = sell.replace(",", ".");
  sell = sell.replace("*", "");
  sell = Number(sell);

  return {
    buy,
    sell
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

const setVolume = (num) => {
  const volumeInput = document.getElementById("volume");
  volume.value = num;
};

const getVolume = () => {
  const volumeInput = document.getElementById("volume");
  return Number(volumeInput.value);
};

const calculateVolume = (amount) => {
  const price = document.getElementById("price");
  const priceVal = Number(price.value.replace(",", "."));

  const num = Math.ceil(amount / priceVal);
  setVolume(num);
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

