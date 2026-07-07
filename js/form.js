/* ============================================================
   FORM.JS — Contact form validation & simulated submission
   Meghdoot Motors
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var contactForm = document.getElementById('contactForm');

  if (!contactForm) return;

  var formFields = contactForm.querySelectorAll('input, select, textarea');
  var submitBtn = contactForm.querySelector('button[type="submit"]');
  var formContainer = contactForm.parentElement;
  var successState = formContainer ? formContainer.querySelector('.form-success') : null;

  /* ============================================================
     VALIDATION HELPERS
     ============================================================ */
  function validateRequired(value) {
    return value.trim().length > 0;
  }

  function validatePhone(value) {
    // Indian phone: +91 XXXXX XXXXX or 10-digit
    return /^(\+91[-\s]?)?[6-9]\d{9}$/.test(value.trim()) || value.trim() === '';
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || value.trim() === '';
  }

  function showError(field, message) {
    field.classList.add('error');
    var errorEl = field.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('visible');
    }
  }

  function clearError(field) {
    field.classList.remove('error');
    var errorEl = field.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
  }

  /* ============================================================
     REAL-TIME VALIDATION ON BLUR
     ============================================================ */
  formFields.forEach(function (field) {
    field.addEventListener('blur', function () {
      validateField(this);
    });

    field.addEventListener('input', function () {
      // Clear error while typing
      if (this.classList.contains('error')) {
        clearError(this);
      }
    });
  });

  function validateField(field) {
    var name = field.getAttribute('name');
    var value = field.value;
    var required = field.hasAttribute('required');
    var type = field.getAttribute('type');

    // Clear existing error
    clearError(field);

    // Check required
    if (required && !validateRequired(value)) {
      var label = field.parentElement.querySelector('label');
      var fieldName = label ? label.textContent : 'This field';
      showError(field, fieldName + ' is required');
      return false;
    }

    // Check phone
    if (type === 'tel' && value.trim() !== '' && !validatePhone(value)) {
      showError(field, 'Please enter a valid phone number (e.g., +91 98765 43210)');
      return false;
    }

    // Check email
    if (type === 'email' && value.trim() !== '' && !validateEmail(value)) {
      showError(field, 'Please enter a valid email address');
      return false;
    }

    return true;
  }

  /* ============================================================
     FORM SUBMISSION
     ============================================================ */
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate all fields
    var isValid = true;
    formFields.forEach(function (field) {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) {
      // Scroll to first error
      var firstError = contactForm.querySelector('.error');
      if (firstError) {
        firstError.focus();
      }
      return;
    }

    // Simulate submission
    if (submitBtn) {
      var originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="animate-spin" style="margin-right:8px;">⟳</span> Sending...';
      submitBtn.disabled = true;
    }

    setTimeout(function () {
      // Show success state
      contactForm.style.display = 'none';
      if (successState) {
        successState.classList.add('visible');
      }

      // Reset button
      if (submitBtn) {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    }, 1500);
  });

  /* ============================================================
     INSURANCE CLAIM FORM (if present)
     ============================================================ */
  var claimForm = document.querySelector('.claim-form');
  if (claimForm) {
    var claimBtn = claimForm.querySelector('button');
    if (claimBtn) {
      claimBtn.addEventListener('click', function () {
        claimBtn.innerHTML = '<span class="animate-spin" style="margin-right:8px;">⟳</span> PROCESSING...';
        setTimeout(function () {
          claimBtn.innerHTML = '✓ CLAIM REQUEST SENT';
          claimBtn.style.backgroundColor = '#22c55e';
        }, 1500);
      });
    }
  }

  /* ============================================================
     INPUT FOCUS EFFECTS (Contact page)
     ============================================================ */
  document.querySelectorAll('input, select, textarea').forEach(function (el) {
    el.addEventListener('focus', function () {
      var label = this.parentElement.querySelector('label');
      if (label) label.style.color = 'var(--color-secondary)';
    });
    el.addEventListener('blur', function () {
      var label = this.parentElement.querySelector('label');
      if (label) label.style.color = '';
    });
  });

});
