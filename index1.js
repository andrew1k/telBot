// create bot & add token from botfather
const TelegramBot = require('node-telegram-bot-api');
const token = '1675308278:AAEYrIw2-rTwuxbGcS-BybSo8ESmneRO2Vg';
const bot = new TelegramBot(token, {polling: {
  interval: 300,
  autoStart: true,
  params: {
    timeout: 10
  },
}});



bot.onText(/\/echo (.+)/, (msg, match) => {
  const { id } = msg.chat;
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/serv (.+)/, (msg, arr) => {
  
  const chatId = msg.chat.id
  console.log(chatId);
  mainKeyboard(chatId)
});


bot.on('message', (msg) => {
  const text = msg.text.toLocaleLowerCase()


});


// Main Menu
function mainKeyboard (chatId) {
  bot.sendMessage(chatId, 'Главное меню', {
    reply_markup: {
      keyboard: [
        [{text: 'Календарь событий'}],
        [{text: 'Малые Группы'},{text: 'Слушения'}],
        [{text: 'Обучение'},{text: 'Конспекты'}],
        [{text: 'Молитвенное'},{text: 'Вопросы'}],
        [{text: 'Материалы для МГ'}]
      ]
    }
  })
}

