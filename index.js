const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

// DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an H1</h1>`);
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input}</p> `);
  DOMSelectors.input.value = "";
});
