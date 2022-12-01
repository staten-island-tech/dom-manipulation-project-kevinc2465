const DOMSelectors = {
  form: document.getElementById("form-box"),
  submit: document.getElementById("finish"),
  reset: document.getElementById("reset"),
  resultbox: document.getElementById("result-box"),
  input: document.querySelector(".input1"),
  data: document.querySelector(".input2"),
  info: document.querySelector(".input3"),
};

let input = DOMSelectors.input.value;
let data = DOMSelectors.data.value;
let info = DOMSelectors.info.value;

//listen for form submit
function makeHTML() {
  DOMSelectors.resultbox.insertAdjacentHTML(
    "beforeend",
    `
      <div class="result">
      <p class="individual-result"> ${DOMSelectors.input.value}</p> 
      <p class="individual-result"> ${DOMSelectors.data.value}</p> 
      <p class="individual-result"> ${DOMSelectors.info.value}</p> 
      <button type="button" class="cancel">Remove</button>
      </div>
      `
  );
}
function clearField() {
  DOMSelectors.input.value = "";
  DOMSelectors.data.value = "";
  DOMSelectors.info.value = "";
}

function removebtn() {
  document.querySelectorAll(".cancel").forEach((cancel) => {
    cancel.addEventListener("click", function () {
      cancel.parentElement.remove();
    });
  });
}
DOMSelectors.submit.addEventListener("click", function () {
  makeHTML();
  clearField();
  removebtn();
});
