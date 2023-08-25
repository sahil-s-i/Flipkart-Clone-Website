// ******************* progreess bar  ****************************

let element = document.getElementById('pgbar');
// Add an event listener to detect when the animation ends
element.addEventListener('animationend', () => {
  element.classList.add("hide");
});
