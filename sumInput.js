const addSumInput = (container) => {
  const label = document.createElement("label");
  label.innerHTML = "Summa";
  label.style.paddingTop = "50px";
  label.style.marginLeft = "2px";

  const customInput = document.createElement("input");
  customInput.style.width = "30%";

  customInput.addEventListener("keyup", () => {
    const amount = Number(customInput.value);
    calcNumberOfStocks(amount);
  });

  container.appendChild(label);
  container.appendChild(customInput);
};
