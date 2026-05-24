// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = 'rgb(18, 52, 86)'
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

function displayKeyPress(event) {
  document.getElementById('keyPressDisplay').textContent = `Key pressed: ${event.key}`
}

function displayUserInput() {
  const input = document.getElementById('textInput').value
  document.getElementById('textInputDisplay').textContent = `You typed: ${input}`
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}