/* ============================================================
   GALLERY.JS — Filter tabs + Lightbox
   Meghdoot Motors
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ============================================================
     FILTER TABS
     ============================================================ */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filterValue = this.textContent.trim();

        // Update active button state
        filterBtns.forEach(function (b) {
          b.classList.remove('active');
          b.style.backgroundColor = '';
          b.style.color = '';
          b.style.borderColor = '';
        });
        this.classList.add('active');
        this.style.backgroundColor = 'var(--color-primary)';
        this.style.color = '#ffffff';
        this.style.borderColor = 'var(--color-primary)';

        // Filter items
        galleryItems.forEach(function (item) {
          var category = item.getAttribute('data-category');
          if (filterValue === 'All' || category === filterValue) {
            item.classList.remove('hidden');
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(function () {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(function () {
              item.classList.add('hidden');
            }, 300);
          }
        });
      });
    });
  }

  /* ============================================================
     LIGHTBOX
     ============================================================ */
  var lightbox = document.getElementById('galleryLightbox');
  var lightboxImg = document.getElementById('lightboxImage');
  var lightboxClose = document.querySelector('.lightbox-close');

  // Open lightbox on gallery item click
  if (lightbox && galleryItems.length > 0) {
    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var img = this.querySelector('img');
        if (img) {
          var src = img.getAttribute('src');
          if (src && lightboxImg) {
            lightboxImg.setAttribute('src', src);
            lightboxImg.setAttribute('alt', img.getAttribute('alt') || 'Gallery image');
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
          }
        }
      });
    });

    // Close on close button
    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close on overlay click
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* ============================================================
     BEFORE/AFTER SLIDER
     ============================================================ */
  var sliderContainer = document.getElementById('sliderContainer');

  if (sliderContainer) {
    var afterOverlay = sliderContainer.querySelector('.after-overlay');
    var sliderHandle = sliderContainer.querySelector('.slider-handle');
    var isResizing = false;

    function getPosition(e) {
      var rect = sliderContainer.getBoundingClientRect();
      var clientX = e.clientX || (e.touches && e.touches[0].clientX);
      if (!clientX) return;
      var pos = (clientX - rect.left) / rect.width;
      pos = Math.max(0, Math.min(pos, 1));
      return pos;
    }

    function updateSlider(e) {
      if (!isResizing) return;
      var pos = getPosition(e);
      if (pos === undefined) return;
      if (afterOverlay) afterOverlay.style.width = (pos * 100) + '%';
      if (sliderHandle) sliderHandle.style.left = (pos * 100) + '%';
    }

    if (sliderHandle) {
      sliderHandle.addEventListener('mousedown', function () {
        isResizing = true;
      });
    }

    window.addEventListener('mouseup', function () {
      isResizing = false;
    });

    window.addEventListener('mousemove', updateSlider);

    if (sliderHandle) {
      sliderHandle.addEventListener('touchstart', function () {
        isResizing = true;
      }, { passive: true });
    }

    window.addEventListener('touchend', function () {
      isResizing = false;
    });

    window.addEventListener('touchmove', updateSlider, { passive: true });

    // Initialize position
    if (afterOverlay) afterOverlay.style.width = '50%';
    if (sliderHandle) sliderHandle.style.left = '50%';
  }

  /* ============================================================
     SERVICES PAGE FILTER
     ============================================================ */
  var serviceTabBtns = document.querySelectorAll('.service-tab-btn');
  var serviceCards = document.querySelectorAll('.service-card');

  if (serviceTabBtns.length > 0 && typeof window.filterServices === 'undefined') {
    window.filterServices = function (category) {
      serviceTabBtns.forEach(function (btn) {
        btn.classList.remove('active');
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'var(--color-primary)';
      });

      // Find the clicked button and set active
      serviceTabBtns.forEach(function (btn) {
        var onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.indexOf("'" + category + "'") !== -1) {
          btn.classList.add('active');
          btn.style.backgroundColor = 'var(--color-primary)';
          btn.style.color = '#ffffff';
        }
      });

      serviceCards.forEach(function (card) {
        var cat = card.getAttribute('data-category');
        if (category === 'all' || cat === category) {
          card.style.display = 'block';
          setTimeout(function () {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(function () {
            card.style.display = 'none';
          }, 300);
        }
      });
    };

    // Initialize with all services visible
    serviceTabBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        var onclick = this.getAttribute('onclick');
        if (onclick) {
          var match = onclick.match(/filterServices\('([^']+)'\)/);
          if (match) {
            window.filterServices(match[1]);
          }
        }
      });
    });
  }

});
