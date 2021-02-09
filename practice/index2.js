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


const inline_keyboard = [
    [{
        text: 'Forward',
        callback_data: 'forward'
    },{
        text: 'Reply',
        callback_data: 'reply'
    }],
    [{
        text: 'Edit',
        callback_data: 'edit'
    },{
        text: 'Delete',
        callback_data: 'dalete'
    }]
]

bot.on('callback_query', query => {
    const { chat, message_id, text } = query.message

    switch (query.data) {
        case 'forward':
            bot.forwardMessage(chat.id, chat.id, message_id)
            break;
        case 'reply':
            bot.sendMessage(chat.id, 'Reply', {
                reply_to_message_id: message_id
            })
            break;
        case 'edit': 
            bot.editMessageText(`${text} (edited)`, {
                chat_id: chat.id,
                message_id: message_id,
                reply_markup: {inline_keyboard}
            })
            break;
        case 'delete': 
            bot.deleteMessage(chat.id, message_id)
            break;
    }

    bot.answerCallbackQuery({
        callback_query_id: query.id
    })

})

bot.onText(/\/serv/, (msg, [source, match]) => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Keyboard', {
        reply_markup: {
            inline_keyboard
        }
    })
})