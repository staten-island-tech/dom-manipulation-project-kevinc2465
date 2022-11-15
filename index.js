const DOMSelectors = {
  button: document.getElementById("finish"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input1`),
  data: document.querySelector(`#input2`),
  info: document.querySelector(`#input3`),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p> Hello ${input}</p> `);
  DOMSelectors.input.value = "";
  let info = DOMSelectors.info.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p> ${info}</p> `);
  DOMSelectors.info.value = "";
  let data = DOMSelectors.data.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<p> You are ${data} years old</p> `
  );
  DOMSelectors.data.value = "";
});
