
// Sticky Navbar

// When the user scrolls the page, execute myFunction
window.onload = function() {navStick()};
window.onscroll = function() {navStick()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Parallax

let colorfulDotsL = document.getElementById('colorfulDots-l')
let colorfulDotsR = document.getElementById('colorfulDots-r')
let background = document.querySelector('#pl-bg');

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  colorfulDotsL.style.marginTop = (value * 0.5) - 400 + "px";
  colorfulDotsR.style.marginTop = (value * 0.7) - 600 + "px";
  background.style.backgroundPositionY = value + "px";

});



// Get the offset position of the image
var stickyBook = document.getElementById("sticky-book");
var stickyBookOffset = stickyBook.offsetTop;

// Function to add or remove 'fixed' class based on scroll position
function toggleStickyBook() {
    if (window.pageYOffset >= stickyBookOffset) {
        stickyBook.classList.add("fixed");
    } else {
        stickyBook.classList.remove("fixed");
    }
}

// Event listener for scroll event
window.addEventListener("scroll", toggleStickyBook);
