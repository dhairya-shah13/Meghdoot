/* ============================================================
   FORM.JS — Contact form validation & real submission
   Meghdoot Motors
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ─── Shared submission helper ────────────────────────────
  function submitToNetlify(formType, fields, formEl, submitBtn, successEl) {
    // Show loading state
    var originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="animate-spin" style="margin-right:8px;">\u27F3</span> Sending...';
    submitBtn.disabled = true;

    fetch('/.netlify/functions/notify-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType: formType, fields: fields }),
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success) {
          // Show success state
          if (successEl) {
            formEl.style.display = 'none';
            successEl.classList.add('visible');
          } else {
            // Fallback: inline button feedback + auto-reset
            submitBtn.innerHTML = '\u2713 Sent!';
            submitBtn.style.backgroundColor = '#22c55e';
            setTimeout(function () {
              submitBtn.innerHTML = originalHTML;
              submitBtn.style.backgroundColor = '';
              submitBtn.disabled = false;
              formEl.reset();
            }, 3000);
          }
        } else {
          // Show error
          alert(data.message || 'Something went wrong. Please try again or call us directly.');
          submitBtn.innerHTML = originalHTML;
          submitBtn.disabled = false;
        }
      })
      .catch(function () {
        alert('Network error. Please check your connection or call us directly.');
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
      });
  }

  // ─── Collect form fields into a key-value object ──────────
  function collectFields(formEl) {
    var fields = {};
    var elements = formEl.querySelectorAll('input, select, textarea');
    elements.forEach(function (el) {
      var name = el.getAttribute('name');
      if (!name) return;
      // Skip submit buttons and honeypot gets collected too — server filters it
      if (el.type === 'submit' || el.type === 'button') return;
      var label = el.parentElement.querySelector('.form-label');
      var labelText = label ? label.textContent.trim() : name;
      // For selects, get the selected option text
      if (el.tagName === 'SELECT') {
        var selected = el.options[el.selectedIndex];
        fields[name] = selected ? selected.text : el.value;
      } else {
        fields[name] = el.value;
      }
    });
    return fields;
  }

  /* ============================================================
     CONTACT FORM (contact.html)
     ============================================================ */
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    var formFields = contactForm.querySelectorAll('input, select, textarea');
    var submitBtn = contactForm.querySelector('button[type="submit"]');
    var formContainer = contactForm.parentElement;
    var successState = formContainer ? formContainer.querySelector('.form-success') : null;

    /* ── Validation Helpers ── */
    function validateRequired(value) {
      return value.trim().length > 0;
    }

    function validatePhone(value) {
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

    /* ── Real-time validation on blur ── */
    formFields.forEach(function (field) {
      field.addEventListener('blur', function () { validateField(this); });
      field.addEventListener('input', function () {
        if (this.classList.contains('error')) clearError(this);
      });
    });

    function validateField(field) {
      var value = field.value;
      var required = field.hasAttribute('required');
      var type = field.getAttribute('type');
      clearError(field);

      if (required && !validateRequired(value)) {
        var label = field.parentElement.querySelector('label');
        var fieldName = label ? label.textContent : 'This field';
        showError(field, fieldName + ' is required');
        return false;
      }
      if (type === 'tel' && value.trim() !== '' && !validatePhone(value)) {
        showError(field, 'Please enter a valid phone number (e.g., +91 98765 43210)');
        return false;
      }
      if (type === 'email' && value.trim() !== '' && !validateEmail(value)) {
        showError(field, 'Please enter a valid email address');
        return false;
      }
      return true;
    }

    /* ── Submit handler ── */
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;
      formFields.forEach(function (field) {
        if (!validateField(field)) isValid = false;
      });
      if (!isValid) {
        var firstError = contactForm.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }

      var fields = collectFields(contactForm);
      submitToNetlify('contact', fields, contactForm, submitBtn, successState);
    });
  }

  /* ============================================================
     INSURANCE-TYPE FORMS (claim-intimation, insurance-renewal,
     new-insurance, insurance-claim hub)
     These use inline submit functions defined in their own pages.
     ============================================================ */

  /* ── Input focus effects ── */
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
