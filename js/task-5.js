const btnColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btnColor.addEventListener('click', onButtonColor);

function onButtonColor() {
  const newBGColor = getRandomHexColor();
  document.body.style.backgroundColor = newBGColor;
  colorName.textContent = newBGColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
