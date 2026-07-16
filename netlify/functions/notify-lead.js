/* ============================================================
   NOTIFY-LEAD — Netlify Function (Telegram Lead Notifications)
   Meghdoot Motors
   ============================================================
   Receives:  POST /api/notify-lead
   Body:      { formType: string, fields: { label: value, ... } }
   ============================================================ */

const sendTelegramMessage = require('./utils/sendTelegramMessage');

// ─── Honeypot field name ───────────────────────────────────
const HONEYPOT_FIELD = '_hp';

// ─── Validation helpers ────────────────────────────────────
function isValidPhone(value) {
  return /^(\+91[\s-]?)?[6-9]\d{9}$/.test(value.trim());
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validateFields(fields) {
  const errors = [];

  // Every form must have a name and phone
  const nameKeys = ['Full Name', 'Name', 'fullName', 'inqName'];
  const phoneKeys = ['Phone Number', 'Phone', 'phone', 'inqPhone'];

  const hasName = nameKeys.some((k) => {
    const v = fields[k];
    return v && v.trim().length > 0;
  });
  const hasPhone = phoneKeys.some((k) => {
    const v = fields[k];
    return v && v.trim().length > 0;
  });

  if (!hasName) errors.push('Name is required');
  if (!hasPhone) errors.push('Phone is required');

  // Validate phone format if present
  for (const k of phoneKeys) {
    if (fields[k] && fields[k].trim().length > 0) {
      if (!isValidPhone(fields[k])) {
        errors.push('Invalid phone number format');
      }
      break;
    }
  }

  // Validate email format if present
  const emailKeys = ['Email', 'email'];
  for (const k of emailKeys) {
    if (fields[k] && fields[k].trim().length > 0) {
      if (!isValidEmail(fields[k])) {
        errors.push('Invalid email format');
      }
      break;
    }
  }

  return errors;
}

// ─── Message builder ───────────────────────────────────────
function buildMessage(formType, fields) {
  const lines = ['\u26A0\uFE0F New Lead', '']; // ⚠️ New Lead

  // Add source context
  const sourceLabels = {
    'contact': 'Contact Inquiry',
    'service': 'Service Inquiry',
    'insurance-hub': 'Insurance Inquiry',
    'claim': 'Claim Assistance',
    'renewal': 'Insurance Renewal',
    'new-insurance': 'New Insurance Quote',
  };
  lines.push('Source:');
  lines.push(sourceLabels[formType] || formType);
  lines.push('');

  // Add all fields in order, skipping the honeypot
  const orderedKeys = Object.keys(fields);
  for (const key of orderedKeys) {
    if (key === HONEYPOT_FIELD) continue;
    const value = fields[key];
    if (value && value.trim().length > 0) {
      lines.push(`${key}:`);
      lines.push(value.trim());
      lines.push('');
    }
  }

  return lines.join('\n').trim();
}

// ─── Main handler ──────────────────────────────────────────
exports.handler = async function (event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { formType, fields } = body;

    // ── Basic payload validation ──
    if (!formType) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'Missing formType' }),
      };
    }
    if (!fields || typeof fields !== 'object' || Object.keys(fields).length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'Missing or empty fields' }),
      };
    }

    // ── Honeypot check ──
    if (fields[HONEYPOT_FIELD] && fields[HONEYPOT_FIELD].trim().length > 0) {
      // Bot detected — silently accept (don't alert the bot)
      console.log('[notify-lead] Honeypot triggered — submission silently rejected');
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Inquiry received' }),
      };
    }

    // ── Server-side validation ──
    const validationErrors = validateFields(fields);
    if (validationErrors.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: validationErrors.join('; '),
          errors: validationErrors,
        }),
      };
    }

    // ── Build and send Telegram message ──
    const messageText = buildMessage(formType, fields);
    const result = await sendTelegramMessage(messageText);

    if (!result.success) {
      console.error('[notify-lead] Failed to send Telegram:', result.error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: 'Could not send notification. Please try again or call us directly.',
        }),
      };
    }

    // ── Success ──
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Your inquiry has been received. Our team will contact you shortly.',
      }),
    };
  } catch (err) {
    console.error('[notify-lead] Unexpected error:', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Something went wrong. Please try again or call us directly.',
      }),
    };
  }
};
