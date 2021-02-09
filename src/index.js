const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')
const bot = new TelegramBot(config.token, {
    polling: true
})
const kb = require('./keyboard-buttons')
const keyboard = require('./keyboard')
const messages = require('./button-messages')

helper.logStart()


bot.on('message', msg => {
    console.log('Working...');
    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        // Main menu ===============================================================================
        case kb.home.calendar:
            bot.sendMessage(chatId, messages.calendar, {
            reply_markup: {
                keyboard: keyboard.calendar
            }
        })
            break
        case kb.home.smallGroups:
            bot.sendMessage(chatId, messages.smallGroups, {
                reply_markup: {
                    keyboard: keyboard.smallGroups
                }
            })
            break
        case kb.home.serv:
            bot.sendMessage(chatId, messages.serv, {
                reply_markup: {
                    keyboard: keyboard.serv
                }
            })
            break
        case kb.home.teaching:
            bot.sendMessage(chatId, messages.teaching, {
                reply_markup: {
                    keyboard: keyboard.teaching
                }
            })
            break
        case kb.home.notes:

            break
        case kb.home.pray:

            break
        case kb.home.faq:

            break
        case kb.home.materialsForSG:

            break

        // Calendar =====================================================================================
        // Item 1
        case kb.calendar.game:
            bot.sendPhoto(chatId, 'https://sun9-3.userapi.com/impf/9bnoBwrT-M-M-WAMZXBpn7-mnW7t7mdByzFz_Q/gkOBm2nu5z4.jpg?size=1280x852&quality=96&proxy=1&sign=ef00fb957e41677af08414b22f32faa9&type=album', {
                caption: messages.calendarObj.game,
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.apple,
                            url: kb.appleItemFirst
                        },{
                            text: kb.google,
                            url: kb.googleItemFirst
                        }]
                    ]
                }
            })
            break

        // Item 2
        case kb.calendar.pray:
            bot.sendPhoto(chatId, 'https://sun9-51.userapi.com/impf/aEtrt6aeHPM1y5qSF3EzEzDS81dX9Rc302Ar_w/_kfUJEx9z5U.jpg?size=1080x1080&quality=96&proxy=1&sign=f4871801a45271b5885026cfdd9a1ef4&type=album', {
                caption: messages.calendarObj.pray,
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.apple,
                            url: kb.appleItemSecond
                        },{
                            text: kb.google,
                            url: kb.googleItemSecond
                        }]
                    ]
                }
            })
            break

        // Item 3
        case kb.calendar.turnout:
            bot.sendPhoto(chatId, 'https://sun9-44.userapi.com/impf/xEiGK5r-3_b73XX2AmKh7laQE-2zDV0tVIMv6w/t7S6UNoi--Y.jpg?size=1080x1080&quality=96&proxy=1&sign=02fded5853eb7b5bbbb28d5e9342ed86&type=album', {
                caption: messages.calendarObj.turnout,
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.apple,
                            url: kb.appleItemThird
                        },{
                            text: kb.google,
                            url: kb.googleItemThird
                        }]
                    ]
                }
            })// .then(() => {console.log('All Right');})
              // .catch((err) => {console.log(err);})
            break

        // Go Home
        case kb.calendar.goHome:
            bot.sendMessage(chatId, `🌐 Главное меню`, {
                reply_markup: {
                    keyboard: keyboard.home
                }
            })
            break

        // Serv =========================================================================

        // ServAll
        case kb.serv.servAll:
            bot.sendMessage(chatId, messages.servAll, {
            reply_markup: {
                keyboard: keyboard.servAll
            }
        })
            break
        // Serv Hire
        case kb.serv.servHire:
            bot.sendMessage(chatId, messages.servHire, {
                reply_markup: {
                    keyboard: keyboard.serv
                }
            })
            bot.sendMessage(chatId, `🔹 Графический дизайнер`)
            bot.sendMessage(chatId, `🔹 Копирайтер (написание текстов)`)
            bot.sendMessage(chatId, `🔹 Контент-мейкер`)
            break

        // Serv Unknown
        case kb.serv.servunknown:
            bot.sendMessage(chatId, serv.servunknown, {
                reply_markup: {
                    keyboard: keyboard.serv
            }})
            break

        // Go Home
        case kb.serv.goHome:
            bot.sendMessage(chatId, `🌐 Главное меню`, {
                reply_markup: {
                    keyboard: keyboard.home
                }
            })
            break

        // ServAll ========================================================================

        // My Generation
        case kb.servAll.servMyGeneration:
            bot.sendMessage(chatId, messages.servAllObj.servMyGeneration, {reply_markup: {keyboard: keyboard.servAll}})
            break

        // Worship
        case kb.servAll.servWorship:
            bot.sendMessage(chatId, messages.servAllObj.servWorship, {reply_markup: {keyboard: keyboard.servAll}})
            break

        // InfoStand
        case kb.servAll.servInfo:
            bot.sendMessage(chatId, messages.servAllObj.servInfo, {reply_markup: {keyboard: keyboard.servAll}})
            break

        // Cafe
        case kb.servAll.servCafe:
            bot.sendMessage(chatId, messages.servAllObj.servCafe, {reply_markup: {keyboard: keyboard.servAll}})
            break

        // Ashers
        case kb.servAll.servAsher:
            bot.sendMessage(chatId, messages.servAllObj.servAsher, {reply_markup: {keyboard: keyboard.servAll}})
            break

        // Communion
        case kb.servAll.servCommunion:
            bot.sendMessage(chatId, messages.servAllObj.servCommunion, {reply_markup: {keyboard: keyboard.servAll}})
            break

        // Childs 
        case kb.servAll.servChild:
            bot.sendMessage(chatId, messages.servAllObj.servChild, {reply_markup: {keyboard: keyboard.servAll}})
            break

        // Comutication
        case kb.servAll.servComunication:
            bot.sendMessage(chatId, messages.servAllObj.servComunication, {reply_markup: {keyboard: keyboard.servAll}})
            break

        // Meeting
        case kb.servAll.servMeeting:
            bot.sendMessage(chatId, messages.servAllObj.servMeeting, {reply_markup: {keyboard: keyboard.servAll}})
            break

        // Social Web
        case kb.servAll.servSocialWeb:
            bot.sendMessage(chatId, messages.servAllObj.servSocialWeb, {reply_markup: {keyboard: keyboard.servAll}})
            break

        // Back to Serv
        case kb.servAll.backToServ:
            bot.sendMessage(chatId, messages.serv, {
                reply_markup: {
                    keyboard: keyboard.serv
                }
            })
            break
        
        // Teaching ==============================================================================

        case kb.teaching.onePlusOne:

            break
        case kb.teaching.steps:

            break
        case kb.teaching.bibleSchool:

            break
        case kb.teaching.goHome:
            bot.sendMessage(chatId, `🌐 Главное меню`, {
                reply_markup: {
                    keyboard: keyboard.home
                }
            })
            break 

        // OnePlusOne
        case kb.onePlusOne.findMentor:

            break
        case kb.onePlusOne.becomeMentor:

            break
        case kb.onePlusOne.backToTeaching:

            break

        // Materials For Small Groups ==============================================================
        case kb.materialsForSG.msgHelp:

            break
        case kb.materialsForSG.msgNotes:

            break
        case kb.materialsForSG.msgWorship:

            break
        case kb.materialsForSG.msgBooks:

            break
        case kb.materialsForSG.msgVideo:

            break
        case kb.materialsForSG.msgMeetings:

            break
        case kb.materialsForSG.goHome:
            bot.sendMessage(chatId, `🌐 Главное меню`, {
                reply_markup: {
                    keyboard: keyboard.home
                }
            })
            break
        default: 
        bot.sendMessage(chatId, `🌐 Главное меню`, {
            reply_markup: {
                keyboard: keyboard.home
            }
        })

    }
})

bot.onText(/\/start/, msg => {
    bot.sendMessage(helper.getChatId(msg), `Добро пожаловать в telegram bot молодёжного служения церкви "Миссия Благая Весть"! 

    Здесь Вы можете узнать всю актуальную информацию о ближайших событиях церкви, стать частью Малой Группы и других служений, записаться на Чай с пастором и другие мероприятия.
    `, {
        reply_markup: {
            keyboard: keyboar.home
        }
    })
})