/* scripts.js */
function initDarkModeToggle() {
  // Get the dark mode toggle button
  const toggleButton = document.getElementById('dark-mode-toggle');

  // Add an event listener that toggles the "dark-mode" class on the body element when the button is clicked
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // get reference to the nav bar
    const navBar = document.getElementsByClassName('nav-bar')[0];
    navBar.classList.toggle('nav-bar');
  });
}

// Initialize the dark mode toggle when the page loads
window.addEventListener('load', initDarkModeToggle);
