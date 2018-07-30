const addSumInput = (container) => {
  const label = document.createElement("label");
  label.innerHTML = "Summa";
  label.style.paddingTop = "50px";
  label.style.marginLeft = "2px";

  const customInput = document.createElement("input");
  customInput.style.width = "30%";

  customInput.addEventListener("keyup", () => {
    const volume = document.getElementById("volume");
    const price = document.getElementById("price");
    const ammount = Number(customInput.value);
    const priceVal = Number(price.value.replace(",", "."));

    volume.value = Math.ceil(ammount / priceVal);
  });

  container.appendChild(label);
  container.appendChild(customInput);
};
