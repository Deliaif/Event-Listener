const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('mouseover', () => {
  message.textContent = 'Mouse is over the button!'; 
});