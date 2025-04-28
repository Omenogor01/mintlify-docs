/* 
  Lazy Load Script for Mintlify Documentation
  Description: Improve page load performance by implementing lazy loading for images and other media assets.
  This script ensures that resources are only loaded when they are about to enter the viewport.
  Author: Your Name
  Last Updated: 2025-04-29
*/

document.addEventListener('DOMContentLoaded', () => {
  const lazyElements = document.querySelectorAll('[data-src], [data-srcset]');

  const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;

        // Handle lazy loading for images
        if (element.tagName === 'IMG' && element.dataset.src) {
          element.src = element.dataset.src;
          element.removeAttribute('data-src');
        }

        // Handle lazy loading for srcset
        if (element.tagName === 'IMG' && element.dataset.srcset) {
          element.srcset = element.dataset.srcset;
          element.removeAttribute('data-srcset');
        }

        // Handle lazy loading for background images
        if (element.dataset.bg) {
          element.style.backgroundImage = `url(${element.dataset.bg})`;
          element.removeAttribute('data-bg');
        }

        // Stop observing the element once it has been loaded
        observer.unobserve(element);
      }
    });
  });

  lazyElements.forEach(element => {
    lazyLoadObserver.observe(element);
  });
});