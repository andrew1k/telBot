bot.on('message', (msg) => {
    console.log(msg);
    const chatId = msg.chat.id;
    if (msg.text.toLocaleLowerCase() == 'hello') {
      bot.sendMessage(chatId,  `Hi, ${msg.from.first_name}`)
    }
    else {
      bot.sendMessage(chatId, `Получили твое сообщение, ` + msg.from.first_name);
    }
  });
  
// 


  msg.onText(/\/calendar (.+)/, msg => { 
    const html = `<b>Calendar</b>
    Here actions for ${msg.from.first_name}`
    bot.sendMessage(chatid, html, {
      parse_mode: 'HTML'
    })
  })
  



  bot.on('message', msg => {
    const chatId = msg.chat.id;
  
    bot.sendMessage(chatId, 'keyboard',{
      reply_markup: {
        keyboard: [
          ['Calendar'], 
          ['Small Groups', 'Serv'],
          ['Study', 'Notes'],
          ['Praying', 'FAQ']
          ['Small Groups']
        ]
      }
    })
  })