//---------NAVBAR---------
// Get all dropdown effect links
const dropdownEffects = document.querySelectorAll('.dropdown-effect');
let activeDropdown = null;
let clickCount = 0; // Initialize a click count variable
let currentDropdownEffect = null; // Keep track of the current dropdown effect
// Loop through each dropdown effect link
dropdownEffects.forEach((effect) => {
  // Add event listener for click event
  effect.addEventListener('click', toggleDropdown);
});

//--- Function to toggle the corresponding dropdown
function toggleDropdown(event) {
  const dropdownContainer = event.currentTarget.nextElementSibling;
  const dropdownWrapper = dropdownContainer.parentElement;
  const dropdownLink = event.currentTarget;
  const dropdownLinkHref = dropdownLink.getAttribute('href');

  //--- Close any previously open dropdown
  closeActiveDropdown();
  if (dropdownContainer && dropdownContainer.classList.contains('dropdown-container')) {
    // Check if a different dropdown effect was clicked
    if (currentDropdownEffect !== event.currentTarget) {
      clickCount = 0; // Reset the click count
      currentDropdownEffect = event.currentTarget; // Update the current dropdown effect
    }
    clickCount++; // Increment the click count
    if (clickCount === 1) {
      // First click: Toggle the dropdown
      dropdownContainer.style.display = dropdownContainer.style.display === 'block' ? 'none' : 'block';
      activeDropdown = dropdownContainer.style.display === 'block' ? dropdownWrapper : null;
      event.preventDefault(); // Prevent default link behavior
    } else {
      // Second click: Redirect to the link's href
      if (dropdownLinkHref && dropdownLinkHref !== '#') {
        window.location.href = dropdownLinkHref;
      }
      clickCount = 0; // Reset the click count
    }
  }
}

//--- Function to close the currently open dropdown
function closeActiveDropdown() {
  if (activeDropdown) {
    activeDropdown.querySelector('.dropdown-container').style.display = 'none';
    activeDropdown = null;
  }
}

//--- Function to close the dropdown when clicking outside
document.addEventListener('click', function(event) {
  const target = event.target;
  const isDropdownLink = target.classList.contains('dropdown-effect');
  const isInsideDropdown = activeDropdown && activeDropdown.contains(target);

  if (!isDropdownLink && !isInsideDropdown) {
    closeActiveDropdown();
    clickCount = 0; // Reset the click count
    currentDropdownEffect = null; // Reset the current dropdown effect
  }
});

//-------------------- MENU BUTTON
//Appearance of the menu button, once scrolled past thru, only to min-width of 1500 to above
function handleMenuButtonVisibility() {
  const menuButtonContainer = document.querySelector('.menu-button-container');
  const navbar = document.querySelector('.navbar');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const navbarHeight = navbar.offsetHeight;

  if (window.innerWidth >= 1500) {
    // For screens with a minimum width of 1501px
    if (scrollPosition > navbarHeight) {
      menuButtonContainer.style.opacity = '1';
    } else {
      menuButtonContainer.style.opacity = '0';
    }
  } else {
    // For screens with a width less than 1501px
    menuButtonContainer.style.opacity = '1'; // Display the menu button container
  }
}

window.addEventListener('scroll', handleMenuButtonVisibility);
window.addEventListener('resize', handleMenuButtonVisibility);
window.addEventListener('load', handleMenuButtonVisibility); // Call the function on page load

// Call the function initially
handleMenuButtonVisibility();


// ---------SIDEBAR---------
//--- Function to display sidebar
const menuButtonContainer = document.querySelector('.menu-button-container');
const sidebar = document.querySelector('.sidebar');

menuButtonContainer.addEventListener('click', () => {
  sidebar.classList.add('show');
});

//--- Sidebar Dropdown Functionality
const sidebarDropdownEffect1 = document.querySelector('.sidebar-dropdown-effect1');
const sidebarDropdownEffect2 = document.querySelector('.sidebar-dropdown-effect2');
const sidebarDropdownShow1 = document.querySelector('.sidebar-dropdown-show1');
const sidebarDropdownShow2 = document.querySelector('.sidebar-dropdown-show2');

sidebarDropdownEffect1.addEventListener('click', () => {
  sidebarDropdownShow1.classList.toggle('show');
  if (sidebarDropdownShow2.classList.contains('show')) {
    sidebarDropdownShow2.classList.remove('show');
  }
});

sidebarDropdownEffect2.addEventListener('click', () => {
  sidebarDropdownShow2.classList.toggle('show');
  if (sidebarDropdownShow1.classList.contains('show')) {
    sidebarDropdownShow1.classList.remove('show');
  }
});

//--- Function to close the sidebar
const sidebarCloseIcon = document.querySelector('.sidebar-close-icon');

sidebarCloseIcon.addEventListener('click', () => {
  sidebar.classList.remove('show');
});

//--- Function to close the sidebar when tapping outside of it
document.addEventListener('click', (event) => {
  const target = event.target;
  const isSidebar = sidebar.contains(target);
  const isMenuButtonContainer = target.closest('.menu-button-container');

  if (!isSidebar && !isMenuButtonContainer) {
    sidebar.classList.remove('show');
    sidebarDropdownShow1.classList.remove('show');
    sidebarDropdownShow2.classList.remove('show');
  }
});

// ------------------------------------BUTTON
// Clicking proceed, moves to slide page
const proceedButton = document.querySelector('.proceed');
const slidePage = document.querySelector('.slide-page'); // Adjust selector if using a wrapper

proceedButton.addEventListener('click', function() {
  slidePage.scrollIntoView({
    behavior: 'smooth', // Enables smooth scrolling
    block: 'start' // Scrolls to the top of the element
  });
});


// ----------------------------------- SLIDE PAGE
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

//--- Hide all slides initially
slides.forEach(slide => slide.style.display = "none");

//--- Show first slide after page load
showSlides(slideIndex);

//--- Next/previous button functionality
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => showSlides(slideIndex + 1));
prevBtn.addEventListener("click", () => showSlides(slideIndex - 1));

//--- Function to change slides
function showSlides(n) {
  slideIndex = n;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

//--- Add click functionality to indicator dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlides(index));
});




//----- JUSTINE ACCOUNTS
function openFacebook() {
  window.location.href = "https://www.facebook.com";
}

function openTwitter() {
  window.location.href = "https://www.twitter.com";
}

function openInstagram() {
  window.location.href = "https://www.instagram.com";
}
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.container');

  function fadeInContainer() {
    const containerPosition = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerPosition < windowHeight * 0.9) {
      container.classList.add('fade-in');
    }
  }

  window.addEventListener('scroll', fadeInContainer);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  showProfilePage();
});

function showProfilePage() {
  var loginPage = document.getElementById('loginPage');
  var profilePage = document.getElementById('profilePage');
  var userName = document.getElementById('userName');
  var userEmail = document.getElementById('userEmail');

  userName.textContent = localStorage.getItem('name');
  userEmail.textContent = localStorage.getItem('email');

  loginPage.style.display = 'none';
  profilePage.style.display = 'block';
}