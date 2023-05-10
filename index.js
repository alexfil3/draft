const div = document.querySelector('div');

div.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return
  }
  console.log(evt.target.textContent)
}