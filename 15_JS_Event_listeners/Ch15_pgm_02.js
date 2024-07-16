// Generating the keyboard code code using even listener. 
// Select the element where the key code will be displayed
const keyDisplay = document.getElementById('key-display');

// Add event listener to capture key presses
document.addEventListener('keydown', event => {
    keyDisplay.textContent = `Key Code: ${event.keyCode}`;
});
// The image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_keycode_day_3.2.gif

