// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
  });

  // Smooth scroll with offset for fixed navbar
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Offset for the navbar
      behavior: 'smooth'
    });
  });
});

const navbar = document.querySelector('.navbar');
let lastClickedId = null;

document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // If clicked again on the same section, remove fade and reset
    if (lastClickedId === targetId) {
      navbar.classList.remove('fade');
      lastClickedId = null;
    } else {
      navbar.classList.add('fade');
      lastClickedId = targetId;
    }

    // Scroll to the section with navbar offset
    window.scrollTo({
      top: targetElement.offsetTop - navbar.offsetHeight,
      behavior: 'smooth'
    });
  });
});

// Reset fade when the hamburger menu is clicked
document.querySelector('.navbar-toggler').addEventListener('click', function () {
  navbar.classList.remove('fade');
  lastClickedId = null;
});


 
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });
  
  // Section fade-in and fade-out effect
  const fadeElements = document.querySelectorAll('.fade-section');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // triggers fade-out
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(el => fadeObserver.observe(el));
  
  // Typing effect in header
  const typing = document.getElementById("typing-text");
  const phrases = ["Web Development", "Mobile Solutions", "Cloud Integration"];
  let i = 0, j = 0, isDeleting = false;
  
  function typeEffect() {
    const current = phrases[i];
    typing.textContent = current.substring(0, j) + (j % 2 === 0 ? "|" : "");
  
    if (!isDeleting && j < current.length) {
      j++;
    } else if (isDeleting && j > 0) {
      j--;
    } else if (!isDeleting && j === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    } else {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
  typeEffect();

  function toggleTheme() {
    const body = document.body;
    const toggle = document.getElementById("theme-checkbox");
  
    if (toggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }
  
  // Load theme from storage
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const toggle = document.getElementById("theme-checkbox");
  
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      if (toggle) toggle.checked = true;
    }
  });
  
