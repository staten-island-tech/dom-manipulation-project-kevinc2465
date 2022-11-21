const DOMSelectors = {
  //get form
  submit: document.getElementById("finish"),
  reset: document.getElementById("reset"),
  box: document.getElementById("form-box"),
  input: document.querySelector(`#input1`),
  result: document.getElementById("result-box"),
  data: document.querySelector(`#input2`),
  info: document.querySelector(`#input3`),
};
//listen for form submit
DOMSelectors.submit.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  console.log(DOMSelectors.input.value);
  //make 1 object from values
  //fave words object
  //pass words{} into the function that creats HTML
  //pass object into function that creates tye html
  DOMSelectors.result.insertAdjacentHTML(
    "beforeend",
    `<p class="result">${DOMSelectors.input.value}</p> `
  );
  DOMSelectors.input.value = "";
  let info = DOMSelectors.info.value;
  DOMSelectors.result.insertAdjacentHTML(
    "beforeend",
    `<p class="result"> ${DOMSelectors.info.value}</p> `
  );
  DOMSelectors.info.value = "";
  let data = DOMSelectors.data.value;
  DOMSelectors.result.insertAdjacentHTML(
    "beforeend",
    `<p class="result">${DOMSelectors.data.value}</p> `
  );
  DOMSelectors.data.value = "";
});

DOMSelectors.reset.addEventListener("click", function () {
  DOMSelectors.input.value = "";
  DOMSelectors.data.value = "";
  DOMSelectors.info.value = "";
});
