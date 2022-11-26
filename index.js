const DOMSelectors = {
  form: document.getElementById("form-box"),
  submit: document.getElementById("finish"),
  reset: document.getElementById("reset"),
  result: document.getElementById("result-box"),
  inputs: document.querySelectorAll(".input"),
};
//listen for form submit
function makeHTML() {
  DOMSelectors.submit.addEventListener("click", function () {
  DOMSelectors.inputs.forEach((input) => {
      DOMSelectors.result.insertAdjacentHTML("beforeend", `<p> ${input.value}</p>`)
    })   
    })};
 makeHTML()


// DOMSelectors.submit.addEventListener("click", function(){
//   console.log(words.uno.value)
// })

//  DOMSelectors.submit.addEventListener ("click", function () {
//   DOMSelectors.result.insertAdjacentHTML("beforeend",
//   `<p class="result">${words.uno.value}</p> `
// );
  // DOMSelectors.words.value = "";
  // console.log(values, words)
//  });
    //make 1 object from values
//fave words object
//pass words{} into the function that creats HTML
//pass object into function that creates the html

// DOMSelectors.result.insertAdjacentHTML(
//   "beforeend",
//   `<p class="result">${DOMSelectors.input.value}</p> `
// );
// // DOMSelectors.input.value = "";
// let info = DOMSelectors.info.value;
// DOMSelectors.result.insertAdjacentHTML(
//   "beforeend",
//   `<p class="result"> ${DOMSelectors.info.value}</p> `
// );
// DOMSelectors.info.value = "";
// let data = DOMSelectors.data.value;
// DOMSelectors.result.insertAdjacentHTML(
//   "beforeend",
//   `<p class="result">${DOMSelectors.data.value}</p> `
// );
// DOMSelectors.data.value = "";

DOMSelectors.reset.addEventListener("click", function () {
  DOMSelectors.input.value = "";
  DOMSelectors.data.value = "";
  DOMSelectors.info.value = "";
});
