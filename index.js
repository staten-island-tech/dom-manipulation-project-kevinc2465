const DOMSelectors = {
  submit: document.getElementById("finish"),
  reset: document.getElementById("reset"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input1`),
  result: document.getElementById("result"),
  data: document.querySelector(`#input2`),
  info: document.querySelector(`#input3`),
};

DOMSelectors.submit.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.result.insertAdjacentHTML("beforeend", `<p>${input}</p> `);
  DOMSelectors.input.value = "";
  let info = DOMSelectors.info.value;
  DOMSelectors.result.insertAdjacentHTML("beforeend", `<p> ${info}</p> `);
  DOMSelectors.info.value = "";
  let data = DOMSelectors.data.value;
  DOMSelectors.result.insertAdjacentHTML("beforeend", `<p>${data}</p> `);
  DOMSelectors.data.value = "";
});

DOMSelectors.reset.addEventListener("click", function (){
    DOMSelectors.input.value = "";
    DOMSelectors.data.value = "";
    DOMSelectors.info.value = "";
});








