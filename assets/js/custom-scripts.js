/* 
  Custom Scripts for Mintlify Documentation
  Description: Enhance interactivity and functionality of your documentation with custom JavaScript.
  This file includes scripts for navigation, user interactions, and dynamic content loading.
  Author: Your Name
  Last Updated: 2025-04-29
*/

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Toggle Mobile Navigation Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// Highlight Active Navigation Link
const navLinks = document.querySelectorAll('.nav-menu a');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
  if (link.href.includes(currentPath)) {
    link.classList.add('active');
  }
});

// Dynamic Content Loading (Example)
async function loadDynamicContent(url, targetElementId) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.text();
    document.getElementById(targetElementId).innerHTML = content;
  } catch (error) {
    console.error('Error loading dynamic content:', error);
  }
}

// Example Usage
// loadDynamicContent('/dynamic-content.html', 'dynamic-content-container');

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
});