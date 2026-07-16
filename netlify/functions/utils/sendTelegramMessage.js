/* ============================================================
   SEND TELEGRAM MESSAGE — Shared Utility
   Meghdoot Motors
   ============================================================
   Reads TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID from env vars.
   ============================================================ */

/**
 * Send a plain-text message to the configured Telegram chat.
 * @param {string} messageText - The formatted message to send.
 * @returns {Promise<{success: boolean, error?: string}>}
 */
module.exports = async function sendTelegramMessage(messageText) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('[sendTelegramMessage] Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return { success: false, error: 'Telegram not configured on server' };
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: Number(chatId),
        text: messageText,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error('[sendTelegramMessage] Telegram API error:', data);
      return { success: false, error: data.description || 'Telegram API error' };
    }

    return { success: true };
  } catch (err) {
    console.error('[sendTelegramMessage] Network error:', err.message);
    return { success: false, error: err.message };
  }
};
