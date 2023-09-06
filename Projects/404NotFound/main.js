document.addEventListener("DOMContentLoaded", function() {
  var errorDescription = document.getElementById("errorDescription");

  function updateDescriptionText() {
    if (window.innerWidth <= 480) {
      errorDescription.textContent = "This page is not available on mobile devices.";
    } else {
      errorDescription.textContent = "The page you are looking for might have been removed, had its name changed or is temporarily unavailable.";
    }
  }

  // Call the function on page load and when the window is resized
  updateDescriptionText();
  window.addEventListener("resize", updateDescriptionText);
});
