//your JS code here. If required.
window.addEventListener("resize", () => {
  let div = document.getElementById("sizeInfo");
  div.innerHTML = `<h1>Width: ${window.innerWidth} and Height: ${window.innerHeight}</h1>`
})