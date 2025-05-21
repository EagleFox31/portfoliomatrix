import TelegramBot from 'node-telegram-bot-api';

// Configurer les variables d'environnement pour Telegram
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Créer une instance du bot
let bot: TelegramBot | null = null;

// Initialiser le bot si les variables d'environnement sont définies
if (TOKEN && CHAT_ID) {
  try {
    bot = new TelegramBot(TOKEN, { polling: false });
    console.log('Telegram bot initialized successfully');
  } catch (error) {
    console.error('Error initializing Telegram bot:', error);
  }
} else {
  console.warn('Telegram bot not initialized: missing environment variables');
}

/**
 * Envoie un message au chat Telegram configuré
 * @param message Le message à envoyer
 * @returns Promise<boolean> true si le message a été envoyé avec succès, false sinon
 */
export async function sendTelegramMessage(message: string): Promise<boolean> {
  if (!bot || !CHAT_ID) {
    console.warn('Cannot send Telegram message: bot or chat ID not configured');
    return false;
  }

  try {
    await bot.sendMessage(CHAT_ID, message, { parse_mode: 'HTML' });
    return true;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return false;
  }
}

/**
 * Formate les données du formulaire de contact en un message lisible pour Telegram
 * @param contactData Les données du formulaire de contact
 * @returns Le message formaté
 */
export function formatContactMessage(contactData: { name: string; email: string; message: string }): string {
  const { name, email, message } = contactData;
  
  return `
<b>🔔 Nouveau message de contact</b>

<b>Nom:</b> ${name}
<b>Email:</b> ${email}
<b>Message:</b>
${message}

<i>Envoyé depuis votre portfolio</i>
`;
}