const inputField = document.getElementById('textInput');
const lastKeyDisplay = document.getElementById('lastKey');

inputField.addEventListener('keydown', (event) => {
  lastKeyDisplay.textContent = event.key; 
});