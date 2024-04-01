//your JS code here. If required.
// Get the form, input, and output elements
const form = document.querySelector('form');
const fontSizeInput = document.getElementById('fontsize');
const fontColorInput = document.getElementById('fontcolor');

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// Apply the user's preferences on page load
window.onload = function() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');
  if (fontSize) document.body.style.fontSize = fontSize + 'px';
  if (fontColor) document.body.style.color = fontColor;
};

// Handle the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;
  setCookie('fontsize', fontSize, 30);
  setCookie('fontcolor', fontColor, 30);
  document.body.style.fontSize = fontSize + 'px';
  document.body.style.color = fontColor;
});