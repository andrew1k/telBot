// create bot & add token from botfather
const TelegramBot = require('node-telegram-bot-api');
const token = '1675308278:AAEYrIw2-rTwuxbGcS-BybSo8ESmneRO2Vg';
const debug = require('./helpers')

console.log('Bot has been started...');

const bot = new TelegramBot(token, {polling: {
  interval: 300,
  autoStart: true,
  params: {
    timeout: 10
  },
}});

bot.on('message', msg => {
    const chatId = msg.chat.id
    const txt = msg.text
 
    // Calendar
    if (txt === 'Календарь Событий') {
        bot.sendMessage(chatId, `📆 СОБЫТИЯ ЭТОГО МЕСЯЦА
Вы можете узнать актуальную информацию о мероприятиях церкви и добавить их в свой календарь, перейдя по ссылке с нужным мероприятием.`, {
            reply_markup: {
                keyboard: [
                    [`🎲 ВЕЧЕР НАСТОЛЬНЫХ ИГР`],
                    [`🙏🏻 МОЛОДЕЖНАЯ МОЛИТВА`],
                    [`🏘 МОЛОДЕЖНЫЙ ВЫЕЗД`],
                    ['Назад']
                ]
            }
        })
    } else if (txt === 'Молитвенное') {
        console.log('Praying');
    } else if (txt === 'Вопрос') {
        console.log('FAQ');
    } else if (txt === `🎲 ВЕЧЕР НАСТОЛЬНЫХ ИГР`) {
        console.log('Games');
    } else if (txt === `🙏🏻 МОЛОДЕЖНАЯ МОЛИТВА`) {
        console.log('Pray');    
    } else if (txt === `🏘 МОЛОДЕЖНЫЙ ВЫЕЗД`) {
        console.log('Out');
    }
    
    
    
    else {
        bot.sendMessage(chatId, 'Main menu', {
            reply_markup: {
                keyboard: [
                    ['Календарь Событий'],
                    ['Молитвенное', 'Вопрос']
                ]
            }
        })
    }
})
