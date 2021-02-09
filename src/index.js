const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')
const bot = new TelegramBot(config.token, {
    polling: true
})

// DB ==========================
// const mongoose = require('mongoose')

// mongoose.connect(config.DB_URL).then(() => {console.log('DB Successfully added...');})
//                                .catch((err) => {console.log(err);})

// const Schema = mongoose.Schema

// const userScheme = new Schema({
//     userName: String,
//     UserText: String,
//     formFrom: String,
// });

// const UserReply = mongoose.model('UserReply', userScheme)
// DB ==========================

const kb = require('./keyboard-buttons')
const keyboard = require('./keyboard')
const messages = require('./button-messages')
const idAdmin = config.idAdmin
const fs = require('fs')
const {
    kStringMaxLength
} = require('buffer')

// let SGL = [] // Small Group Leader
// let SGM = [] // Small Group Member
// let FAQ = [] // Frequently Asked Questions
// let SERVUN = [] // Serv Unknown
// let PRAYFORM = [] // Pray form
// let SERVHI = [] // Serv Hire
// let OPOS = [] // One Plus One Student
// let OPOM = [] // Ono Plus One Mentor

// helper.logStart()


bot.on('message', msg => {
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
            bot.sendMessage(chatId, messages.notes, {
                reply_markup: {
                    keyboard: keyboard.home
                }
            })
            break
        case kb.home.pray:
            bot.sendMessage(chatId, messages.pray, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Откликнуться',
                            url: 'https://t.me/nesilchuk'
                        }]
                    ]
                }
            })
            break
        case kb.home.faq:
            bot.sendMessage(chatId, messages.faq, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Откликнуться',
                            url: 'https://t.me/nesilchuk'
                        }]
                    ]
                }
            })
            break
        case kb.home.materialsForSG:
            bot.sendMessage(chatId, messages.materialsForSG, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            })
            bot.sendMessage(chatId, `🔥 Начните с книжки пастора Даниила Шатрова ‘Сила Малой Группы’.`)
            bot.sendDocument(chatId, '../materials/Сила Малой группы.pdf')
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
                        }, {
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
                        }, {
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
                        }, {
                            text: kb.google,
                            url: kb.googleItemThird
                        }]
                    ]
                }
            }) // .then(() => {console.log('All Right');})
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

            // Small Groups ===================================================================
        case kb.smallGroups.sgMember:
            bot.sendMessage(chatId, messages.smallGroupsObj.sgMember, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Откликнуться',
                            url: 'https://t.me/nesilchuk'
                        }]
                    ]
                }
            })
            // if (msg.text !== kb.smallGroups.sgLeader && msg.text !== kb.smallGroups.sgMap && msg.text !== kb.smallGroups.goHome) {
            //     bot.on('message', msg => {
            //         bot.forwardMessage(idAdmin, chatId, msg.message_id)
            //         fs.writeFileSync('./data.txt', helper.debug(`Сообщение от вкладки 'Хочу стать участником Малой Группы' от ${msg.from.username}, текст: ${msg.text}`))
            //         console.log(helper.debug(`Сообщение из 'Хочу стать участником Малой Группы' от ${msg.from.username}, текст: ${msg.text}`))
            //     })
            // }
            break

        case kb.smallGroups.sgLeader:
            bot.sendMessage(chatId, messages.smallGroupsObj.sgLeader, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Откликнуться',
                            url: 'https://t.me/nesilchuk'
                        }]
                    ]
                }
            })
            break

        case kb.smallGroups.sgMap:
            bot.sendMessage(chatId, messages.smallGroupsObj.sgMap, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Карта Малых Групп',
                            url: 'https://yandex.ru/maps/?um=constructor%3A35dad1dc46caf371e7d494ce0a91041adc121c5fde390dd1c7217bd6faee2a13&source=constructorLink'
                        }]
                    ]
                }
            })
            break

        case kb.smallGroups.goHome:
            bot.sendMessage(chatId, messages.smallGroupsObj.goHome, {
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
                    inline_keyboard: [
                        [{
                            text: 'Откликнуться',
                            url: 'https://t.me/nesilchuk'
                        }]
                    ]
                }
            })
            bot.sendMessage(chatId, `🔹 Графический дизайнер`)
            bot.sendMessage(chatId, `🔹 Копирайтер (написание текстов)`)
            bot.sendMessage(chatId, `🔹 Контент-мейкер`)
            break

            // Serv Unknown
        case kb.serv.servunknown:
            bot.sendMessage(chatId, messages.servunknown, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Откликнуться',
                            url: 'https://t.me/nesilchuk'
                        }]
                    ]
                }
            })
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
            bot.sendMessage(chatId, messages.servAllObj.servMyGeneration, {
                reply_markup: {
                    keyboard: keyboard.servAll
                }
            })
            break

            // Worship
        case kb.servAll.servWorship:
            bot.sendMessage(chatId, messages.servAllObj.servWorship, {
                reply_markup: {
                    keyboard: keyboard.servAll
                }
            })
            break

            // InfoStand
        case kb.servAll.servInfo:
            bot.sendMessage(chatId, messages.servAllObj.servInfo, {
                reply_markup: {
                    keyboard: keyboard.servAll
                }
            })
            break

            // Cafe
        case kb.servAll.servCafe:
            bot.sendMessage(chatId, messages.servAllObj.servCafe, {
                reply_markup: {
                    keyboard: keyboard.servAll
                }
            })
            break

            // Ashers
        case kb.servAll.servAsher:
            bot.sendMessage(chatId, messages.servAllObj.servAsher, {
                reply_markup: {
                    keyboard: keyboard.servAll
                }
            })
            break

            // Communion
        case kb.servAll.servCommunion:
            bot.sendMessage(chatId, messages.servAllObj.servCommunion, {
                reply_markup: {
                    keyboard: keyboard.servAll
                }
            })
            break

            // Childs 
        case kb.servAll.servChild:
            bot.sendMessage(chatId, messages.servAllObj.servChild, {
                reply_markup: {
                    keyboard: keyboard.servAll
                }
            })
            break

            // Comutication
        case kb.servAll.servComunication:
            bot.sendMessage(chatId, messages.servAllObj.servComunication, {
                reply_markup: {
                    keyboard: keyboard.servAll
                }
            })
            break

            // Meeting
        case kb.servAll.servMeeting:
            bot.sendMessage(chatId, messages.servAllObj.servMeeting, {
                reply_markup: {
                    keyboard: keyboard.servAll
                }
            })
            break

            // Social Web
        case kb.servAll.servSocialWeb:
            bot.sendMessage(chatId, messages.servAllObj.servSocialWeb, {
                reply_markup: {
                    keyboard: keyboard.servAll
                }
            })
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
            bot.sendMessage(chatId, messages.teachingObj.onePlusOne, {
                reply_markup: {
                    keyboard: keyboard.onePlusOne
                }
            })
            break
        case kb.teaching.steps:
            bot.sendMessage(chatId, messages.teachingObj.stepsObj.stepInfo)
            bot.sendMessage(chatId, messages.teachingObj.stepsObj.stepOne)
            bot.sendMessage(chatId, messages.teachingObj.stepsObj.stepTwo)
            bot.sendMessage(chatId, messages.teachingObj.stepsObj.stepThree)
            bot.sendMessage(chatId, messages.teachingObj.stepsObj.stepFour, {
                reply_markup: {
                    keyboard: keyboard.teaching
                }
            })
            break
        case kb.teaching.bibleSchool:
            bot.sendMessage(chatId, messages.teachingObj.bibleSchool, {
                reply_markup: {
                    keyboard: keyboard.teaching
                }
            })
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
            bot.sendMessage(chatId, messages.teachingObj.onePlusOneObj.onePlusOneStudent, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Откликнуться',
                            url: 'https://t.me/nesilchuk'
                        }]
                    ]
                }
            })
            break
        case kb.onePlusOne.becomeMentor:
            bot.sendMessage(chatId, messages.teachingObj.onePlusOneObj.onePlusOneMentor, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Откликнуться',
                            url: 'https://t.me/nesilchuk'
                        }]
                    ]
                }
            })
            break
        case kb.onePlusOne.backToTeaching:
            bot.sendMessage(chatId, messages.teaching, {
                reply_markup: {
                    keyboard: keyboard.teaching
                }
            })
            break

            // Materials For Small Groups ==============================================================
        case kb.materialsForSG.msgHelp:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgHelp, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            })
            bot.sendDocument(chatId, './materials/Советы для ведущих.docx')
            bot.sendDocument(chatId, './materials/Ценности МГ.docx')
            break
        case kb.materialsForSG.msgNotes:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgNotes, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            })
            break
        case kb.materialsForSG.msgWorship:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgWorship, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            })
            break
        case kb.materialsForSG.msgBooks:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgBooks, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            })
            break
        case kb.materialsForSG.msgVideo:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgVideo.vid1, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            })
            bot.sendMessage(chatId, messages.materialsForSGObj.msgVideo.vid2)
            bot.sendMessage(chatId, messages.materialsForSGObj.msgVideo.vid3)
            bot.sendMessage(chatId, messages.materialsForSGObj.msgVideo.vid4)
            break
        case kb.materialsForSG.msgMeetings:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgMeetings, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            })
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