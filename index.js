const DOMSelector = {
  button: document.getElementById("btn"),
  text: document.querySelector("#parent"),
  box: document.getElementById("project"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "green";
  text.textContent = "This is a big red box";
}
backgroundAndText(DOMSelector.text);
