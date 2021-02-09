// create bot & add token from botfather
const TelegramBot = require('node-telegram-bot-api');
const token = '1504339322:AAGhIAxZ1Tx3egnV8gse-HULJ6OKsYNshhM';
const helper = require('./helper')
const idAdmin = 639954422;


const bot = new TelegramBot(token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        },
    }
});


bot.onText(/\/start/, msg => {
    console.log('Bot has been started');
    
})