const DOMSelectors = {
  button1: document.getElementById("finish"),
  button2: document.getElementById("reset"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input1`),
  data: document.querySelector(`#input2`),
  info: document.querySelector(`#input3`),
  result: document.getElementById("result"),
};

DOMSelectors.button1.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p>${input}</p> `);
  DOMSelectors.input.value = "";
  let info = DOMSelectors.info.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p> ${info}</p> `);
  DOMSelectors.info.value = "";
  let data = DOMSelectors.data.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p>${data}</p> `);
  DOMSelectors.data.value = "";
});

DOMSelectors.button2.addEventListener("click", function () {
  document.getElementById("container-box").reset();
});
