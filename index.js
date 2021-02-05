const TelegramBot = require('node-telegram-bot-api');

const token = '1675308278:AAEYrIw2-rTwuxbGcS-BybSo8ESmneRO2Vg';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Получили твое сообщение! Спасибо!');
});