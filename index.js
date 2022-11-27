const DOMSelectors = {
  form: document.getElementById("form-box"),
  submit: document.getElementById("finish"),
  reset: document.getElementById("reset"),
  result: document.getElementById("result-box"),
  // inputs: document.querySelectorAll(".point"),
  input: document.querySelector("#input1"),
  data: document.querySelector("#input2"),
  info: document.querySelector("#input3"),
};
//listen for form submit
function makeHTML() {
  DOMSelectors.submit.addEventListener("click", function () {
    let input = DOMSelectors.input.value;
    let data = DOMSelectors.data.value;
    let info = DOMSelectors.info.value;
      DOMSelectors.result.insertAdjacentHTML("beforeend", `
      <div class="result">
      <p class="individual-result"> ${input}</p> 
      <p class="individual-result"> ${data}</p> 
      <p class="individual-result"> ${info}</p> 
      <button onclick="removeNameFromTheList(this)">Remove</button>
      </div>
      `);  
    })};
    function removeNameFromTheList(e) {
      e.parentElement.remove()
    }
 makeHTML();
console.log(input)

