let currentDiv = 0;
const divs = document.querySelectorAll('.content');
const button = document.getElementById('slideButton');
const backButton = document.getElementById('backButton');

// Initial setup
updateDivs();

// Slide forward
button.addEventListener('click', () => {
  currentDiv = (currentDiv + 1) % divs.length;
  updateDivs();
});

// Slide backward
backButton.addEventListener('click', () => {
  currentDiv = (currentDiv - 1 + divs.length) % divs.length;  // Use + divs.length to avoid negative values
  updateDivs();
});

// Update the position of each div
function updateDivs() {
  divs.forEach((div, index) => {
    div.style.transform = `translateX(${(index - currentDiv) * 150}%)`;
  });
}

// Scroll down to the form
function scrolldiv() {
  const elem = document.getElementById("form");
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Submit the form
function submitForm() {
  const form = document.getElementById('myForm');
  if (form) {
    form.submit();
  }
}

// Choose the currently visible person
function choosePerson() {
  const visibleDiv = Array.from(divs).find(div => div.style.transform === "translateX(0%)");
  if (visibleDiv) {
    const visibleDivId = visibleDiv.id;
    const checkbox = document.querySelector(`input[type="checkbox"][value="${capitalizeFirstLetter(visibleDivId)}"]`);
    if (checkbox) {
      checkbox.checked = true;
    }
  }
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}