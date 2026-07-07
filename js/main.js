/* ============================================================
   MAIN.JS — Nav toggle, sticky header, smooth scroll, active page
   Meghdoot Motors
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ============================================================
     STICKY HEADER — Add/remove scrolled class
     ============================================================ */
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  /* ============================================================
     MOBILE NAV — Hamburger toggle
     ============================================================ */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');

  function openMobileNav() {
    if (hamburger) hamburger.classList.add('active');
    if (mobileNav) mobileNav.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (hamburger) hamburger.classList.remove('active');
    if (mobileNav) mobileNav.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (mobileNav && mobileNav.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  // Close on overlay click
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileNav);
  }

  // Close on nav link click
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });
  }

  /* ============================================================
     ACTIVE PAGE HIGHLIGHTING
     ============================================================ */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Normalize: if no extension, assume index.html
  if (currentPage === '' || currentPage.indexOf('.') === -1) {
    currentPage = 'index.html';
  }

  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  /* ============================================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* ============================================================
     ESC KEY — Close mobile nav / lightbox
     ============================================================ */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      // Close mobile nav
      if (mobileNav && mobileNav.classList.contains('open')) {
        closeMobileNav();
      }
      // Close lightbox
      var lightbox = document.querySelector('.lightbox.open');
      if (lightbox) {
        lightbox.classList.remove('open');
      }
    }
  });

});
