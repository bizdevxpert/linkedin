// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });

  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-testimonial');
  const nextBtn = document.querySelector('.next-testimonial');
  let currentSlide = 0;

  // Function to show a specific slide
  function showSlide(index) {
    // Remove active class from all slides and dots
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Update current slide index
    currentSlide = index;
  }

  // Event listeners for dots
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-index'));
      showSlide(slideIndex);
    });
  });

  // Event listeners for prev/next buttons
  prevBtn.addEventListener('click', function() {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) newIndex = testimonialSlides.length - 1;
    showSlide(newIndex);
  });

  nextBtn.addEventListener('click', function() {
    let newIndex = currentSlide + 1;
    if (newIndex >= testimonialSlides.length) newIndex = 0;
    showSlide(newIndex);
  });

  // Auto-rotate testimonials
  setInterval(function() {
    let newIndex = currentSlide + 1;
    if (newIndex >= testimonialSlides.length) newIndex = 0;
    showSlide(newIndex);
  }, 8000);

  // Sticky Header
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.padding = '10px 0';
      header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '15px 0';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form validation for contact forms (if added later)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  });

  // Add call-to-action hover effects
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
});
