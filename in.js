// create bot & add token from botfather
const TelegramBot = require('node-telegram-bot-api');
const token = '1675308278:AAEYrIw2-rTwuxbGcS-BybSo8ESmneRO2Vg';
const debug = require('./helpers')
const idAdmin = 639954422;

console.log('Bot has been started...');

const bot = new TelegramBot(token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        },
    }
});

bot.on('message', msg => {
    const chatId = msg.chat.id

    
    bot.sendMessage(chatId, 'Message').then(() => {
        // console.log(`From ${msg.from.first_name}, Username = ${msg.from.username}, with text ${msg.text}`);
        console.log(debug(msg));
    })

    bot.forwardMessage(idAdmin, chatId, msg.message_id)
})
