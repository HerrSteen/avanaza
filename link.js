const createLink = (container, text, linkTo) => {
  const link = document.createElement("a");
  link.style.marginTop = "10px";
  link.style.marginLeft = "13px";
  link.style.display = "inline-block";
  link.innerHTML = `Till ${text} sida`;

  let dest = window.location.href;
  dest = dest.replace("kop", linkTo);
  dest = dest.replace("salj", linkTo);
  link.href = dest;

  container.appendChild(link);
}
