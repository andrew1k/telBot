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
    const { id } = msg.chat
    const text = msg.text.toLowerCase()
    const fName = msg.from.first_name
    if (text == 'hello') {
        bot.sendMessage(id, `Hi, ${fName}`)
        .then(() => {
            console.log('Message has been sent');
        })
    } // else {
        // bot.sendMessage(id, debug(msg))
        // .catch((error) => {
        //     console.error(error);
        // })
    // }

})



bot.onText(/\/serv (.+)/, (msg, [source, match]) => {
    const { id } = msg.chat

    bot.sendMessage(id, debug(match))
})