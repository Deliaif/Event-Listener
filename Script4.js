const inputField = document.getElementById('itemInput');
const addButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', () => {
  const newItemText = inputField.value.trim(); 
  if (newItemText) {
    const newItem = document.createElement('li');
    newItem.textContent = newItemText; 
    itemList.appendChild(newItem); 
    inputField.value = ''; 
  } else {
    alert('Please enter a valid item!'); 
  }
});