const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')
const bot = new TelegramBot(config.token, {
    polling: true
})
const files = require('./files')
const kb = require('./keyboard-buttons')
const keyboard = require('./keyboard')
const messages = require('./button-messages')
const idAdmin = config.idAdmin
const fs = require('fs')
const {
    kStringMaxLength
} = require('buffer')
const {
    createBrotliCompress
} = require('zlib')
const {
    learnMore
} = require('./keyboard-buttons')
const {
    url
} = require('inspector')

//helper.logStart()

// /start button listner
bot.onText(/\/start/, msg => {
    const chatId = helper.getChatId(msg)
    bot.sendMessage(chatId, messages.startBntAction, {
        reply_markup: {
            keyboard: keyboard.home
        }
    })
    console.log(helper.debug(`From start 
 chatID: ${chatId},
 userID: ${msg.from.id}, firstName: ${msg.from.first_name}, username: ${msg.from.username},
 date: ${msg.date},
 text: ${msg.text}`));
})

// Action Listner 
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
        case kb.home.learnMore:
            bot.sendMessage(chatId, messages.learnMore, {
                reply_markup: {
                    keyboard: keyboard.learnMore
                }
            })
            break
        case kb.home.mainSteps:
            bot.sendMessage(chatId, messages.stepsObj.stepOne).then(() => {
                bot.sendMessage(chatId, messages.stepsObj.stepTwo).then(() => {
                    bot.sendMessage(chatId, messages.stepsObj.stepThree).then(() => {
                        bot.sendMessage(chatId, messages.stepsObj.stepFour).then(() => {
                            bot.sendMessage(chatId, messages.stepsObj.stepInfo, {
                                reply_markup: {
                                    inline_keyboard: [
                                        [{
                                            text: `${kb.signUpBtn} на ШАГ`,
                                            url: kb.messToKarina
                                        }]
                                    ]
                                }
                            })
                        })
                    })
                })
            })
            break
        case kb.home.pray:
            bot.sendMessage(chatId, messages.pray, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: `${kb.respondBtn} нам`,
                            url: kb.respondUrl,
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
                            text: `${kb.respondBtn} нам`,
                            url: kb.respondUrl,
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
            }).then(() => {
                bot.sendMessage(chatId, `🔥 Начните с книжки пастора Даниила Шатрова ‘Сила Малой Группы’.`)
                bot.sendDocument(chatId, files.materialsForSG.danBook)
            })
            break

            // ========================================================= CALENDAR ====================================================================

            // Item 1 ========== 🎲 ВЕЧЕР НАСТОЛЬНЫХ ИГР =============================
        case kb.calendar.game:
            bot.sendPhoto(chatId, files.calendarPic1, {
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

            // Item 2 ========== 🙏🏻 МОЛОДЕЖНАЯ МОЛИТВА ==============================
        case kb.calendar.pray:
            bot.sendPhoto(chatId, files.calendarPic2, {
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

            // Item 3 ========== Боулинг =========================================
        case kb.calendar.turnout:
            bot.sendPhoto(chatId, files.calendarPic3, {
                caption: messages.calendarObj.turnout,
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.signUpBtn,
                            url: kb.signUpUrl
                        }]
                    ]
                }
            })
            break

            // ==================== ☕️ Чай с Пастором =================================
        case kb.calendar.teaWithPastor:
            bot.sendPhoto(chatId, files.calendarPic4, {
                caption: messages.calendarObj.teaWithPastor,
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.signUpBtn,
                            url: kb.signUpUrl,
                        }]
                    ]
                }
            })
            break

            // ==================== ☕️ Tok Show =================================
        case kb.calendar.tokshow:
            bot.sendPhoto(chatId, files.calendarPicForTokShow, {
                caption: messages.calendarObj.stepsInSundays,
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.apple,
                            url: kb.appleItemFourth,
                        }, {
                            text: kb.google,
                            url: kb.googleItemFourth
                        }]
                    ]
                }
            })
            break
            // ===================== DomashkaParty ===================================
        case kb.calendar.domashkaParty:
            bot.sendPhoto(chatId, files.calendarPicDomashkaParty, {
                caption: messages.calendarObj.domashkaParty,
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.apple,
                            url: kb.appleItemThird,
                        }, {
                            text: kb.google,
                            url: kb.googleItemThird
                        }]
                    ]
                }
            })
            break

            // Go Home
        case kb.calendar.goHome:
            bot.sendMessage(chatId, kb.homeBtn, {
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
                            text: kb.respondBtn,
                            url: kb.respondForSG,
                        }]
                    ]
                }
            })

            break

        case kb.smallGroups.sgLeader:
            bot.sendMessage(chatId, messages.smallGroupsObj.sgLeader, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.respondBtn,
                            url: kb.respondForSG,
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
                            text: kb.sgMap_inline,
                            url: files.mapUrl
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

            // ========================================================== Serv =========================================================================

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
                            text: `Откликнуться`,
                            url: kb.respondUrl,
                        }]
                    ]
                }
            }).then(() => {
                bot.sendMessage(chatId, messages.servHireSecondText)
                    .then(() => {
                        bot.sendMessage(chatId, `🔹 Графического дизайнера`)
                        bot.sendMessage(chatId, `🔹 Копирайтера (написание текстов)`)
                        bot.sendMessage(chatId, `🔹 Контент-мейкера`)
                    })
            })
            break

            // Serv Unknown
        case kb.serv.servunknown:
            bot.sendMessage(chatId, messages.servunknown, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.respondBtn,
                            url: kb.respondUrl,
                        }]
                    ]
                }
            })
            break

            // Go Home
        case kb.serv.goHome:
            bot.sendMessage(chatId, kb.homeBtn, {
                reply_markup: {
                    keyboard: keyboard.home
                }
            })
            break

            // ============================================================ ServAll ========================================================================

            // My Generation
        case kb.servAll.servMyGeneration:
            bot.sendMessage(chatId, messages.servAllObj.servMyGeneration, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.writeLeader,
                            url: 't.me/spb_alexandr_petrov1',
                        }]
                    ]
                }
            })
            break

            // Worship
        case kb.servAll.servWorship:
            bot.sendMessage(chatId, messages.servAllObj.servWorship, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.writeLeader,
                            url: 't.me/emiliya_nikolaeva',
                        }]
                    ]
                }
            })
            break

            // InfoStand
        case kb.servAll.servInfo:
            bot.sendMessage(chatId, messages.servAllObj.servInfo, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.writeLeader,
                            url: 't.me/lilko_22',
                        }]
                    ]
                }
            })
            break

            // Cafe
        case kb.servAll.servCafe:
            bot.sendMessage(chatId, messages.servAllObj.servCafe, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.writeLeader,
                            url: 't.me/Nastena_Pecherskikh',
                        }]
                    ]
                }
            })
            break

            // Ashers
        case kb.servAll.servAsher:
            bot.sendMessage(chatId, messages.servAllObj.servAsher, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.writeLeader,
                            url: 't.me/arsentev',
                        }]
                    ]
                }
            })
            break

            // Communion
        case kb.servAll.servCommunion:
            bot.sendMessage(chatId, messages.servAllObj.servCommunion, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.writeLeader,
                            url: kb.signUpUrl,
                        }]
                    ]
                }
            })
            break

            // Childs 
        case kb.servAll.servChild:
            bot.sendMessage(chatId, messages.servAllObj.servChild, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.writeLeader,
                            url: 't.me/marismir05',
                        }]
                    ]
                }
            })
            break

            // Comutication
        case kb.servAll.servComunication:
            bot.sendMessage(chatId, messages.servAllObj.servComunication, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.writeLeader,
                            url: kb.signUpUrl,
                        }]
                    ]
                }
            })
            break

            // Meeting
        case kb.servAll.servMeeting:
            bot.sendMessage(chatId, messages.servAllObj.servMeeting, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.writeLeader,
                            url: kb.signUpUrl,
                        }]
                    ]
                }
            })
            break

            // Social Web
        case kb.servAll.servSocialWeb:
            bot.sendMessage(chatId, messages.servAllObj.servSocialWeb, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.writeLeader,
                            url: kb.signUpUrl,
                        }]
                    ]
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

            // ======================================================= LearnMore ==============================================================================

        case kb.learnMore.aboutChurch:
            bot.sendPhoto(chatId, files.aboutChurch, {
                caption: messages.learnMoreObj.aboutChurchCaption,
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Сайт церкви',
                            url: 'https://mbv.spb.ru/'
                        }],
                        [{
                            text: 'Instagram церкви',
                            url: 'https://instagram.com/mbvspb?igshid=1l0bt30zrlxy6'
                        }],
                        [{
                            text: 'Instagram пастора Даниила',
                            url: 'https://instagram.com/pastor_shatrov?igshid=13jayautjq3ky',
                        }]
                    ]
                }
            })
            break
        case kb.learnMore.spiritUp:
            bot.sendMessage(chatId, messages.learnMoreObj.spiritUp, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.signUpBtn,
                            url: kb.respondForSG
                        }]
                    ]
                }
            }).then(() => {
                bot.sendMessage(chatId, messages.learnMoreObj.bibleSchool, {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: 'Библейская школа',
                                url: 'https://youtube.com/playlist?list=PLjjvxd6WcKV2oN8Gv8aIvdZ657hLS_KNR'
                            }]
                        ]
                    }
                })
            })
            break
        case kb.learnMore.sozo:
            bot.sendMessage(chatId, messages.learnMoreObj.sozo, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.signUpBtn,
                            url: kb.messToKarina
                        }]
                    ]
                }
            })
            break
        case kb.learnMore.familyServ:
            bot.sendMessage(chatId, messages.learnMoreObj.familyServ, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.signUpBtn,
                            url: kb.messToKarina
                        }]
                    ]
                }
            })
            break
            //=========================================================== Materials For Small Groups ==============================================================================
        case kb.materialsForSG.msgHelp:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgHelp, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            })
            bot.sendDocument(chatId, files.materialsForSG.msgHelp.doc1)
            bot.sendDocument(chatId, files.materialsForSG.msgHelp.doc2)
            break
        case kb.materialsForSG.msgNotes:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgNotes, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Посмотреть проповедь',
                            // ======================= Weekly updates =======================
                            url: 'https://www.youtube.com/watch?v=qQgM-6hf4xg'
                            // ==============================================================
                        }]
                    ]
                }
            })
            break
        case kb.materialsForSG.msgWorship:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgWorship, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: `Песни прославления МБВ(Караоке)`,
                            url: 'https://www.youtube.com/playlist?list=PLjjvxd6WcKV0iJGU4PM6DR4EZ4ideQrR9'
                        }],
                        [{
                            text: `Записи песен с богослужений`,
                            url: 'https://www.youtube.com/playlist?list=PLjjvxd6WcKV0Vae-XkzPV_bOmJWB1iWU3'
                        }]
                    ]
                }
            })
            break
        case kb.materialsForSG.msgBooks:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgBooks, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            })
            bot.sendDocument(chatId, files.materialsForSG.danBook)
            break
        case kb.materialsForSG.msgVideo:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgVideo.vid1, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            }).then(() => {
                bot.sendMessage(chatId, messages.materialsForSGObj.msgVideo.vid2)
                bot.sendMessage(chatId, messages.materialsForSGObj.msgVideo.vid3)
                bot.sendMessage(chatId, messages.materialsForSGObj.msgVideo.vid4)
            })
            break
        case kb.materialsForSG.msgMeetings:
            bot.sendMessage(chatId, messages.materialsForSGObj.msgMeetings, {
                reply_markup: {
                    keyboard: keyboard.materialsForSG
                }
            })
            break
        case kb.materialsForSG.goHome:
            bot.sendMessage(chatId, kb.homeBtn, {
                reply_markup: {
                    keyboard: keyboard.home
                }
            })
            break
        default:
            bot.sendMessage(chatId, kb.homeBtn, {
                reply_markup: {
                    keyboard: keyboard.home
                }
            })
            console.log(JSON.stringify(helper.debug(msg)));
    }
})