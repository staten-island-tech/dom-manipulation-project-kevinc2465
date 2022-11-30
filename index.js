const DOMSelectors = {
  form: document.getElementById("form-box"),
  submit: document.getElementById("finish"),
  reset: document.getElementById("reset"),
  result: document.getElementById("result-box"),
  input: document.querySelector(".input1"),
  data: document.querySelector(".input2"),
  info: document.querySelector(".input3"),
  // remove: document.querySelector(".remove"),
};

let input = DOMSelectors.input.value;
let data = DOMSelectors.data.value;
let info = DOMSelectors.info.value;

//listen for form submit
function makeHTML() {
  DOMSelectors.submit.addEventListener("click", function () {
    DOMSelectors.result.insertAdjacentHTML(
      "beforeend",
      `
      <div class="result">
      <p class="individual-result"> ${DOMSelectors.input.value}</p> 
      <p class="individual-result"> ${DOMSelectors.data.value}</p> 
      <p class="individual-result"> ${DOMSelectors.info.value}</p> 
      <button class="cancel">Remove</button>
      </div>
      `
    );
    DOMSelectors.input.value = "";
    DOMSelectors.data.value = "";
    DOMSelectors.info.value = "";
  });
}

function removebtn() {
  let cancels = document.querySelectorAll(".cancel");
  cancels.forEach((cancel) => {
    cancel.addEventListener("click", function (event) {
      event.target.remove();
    });
  });
}
makeHTML();
removebtn();
