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
const { createBrotliCompress } = require('zlib')

//helper.logStart()

// /start button listner
bot.onText(/\/start/, msg => {
    const chatId = helper.getChatId(msg)
    bot.sendMessage(chatId, messages.startBntAction, {
        reply_markup: {
            keyboard: keyboard.home
        }
    })
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
            // temp key
        case kb.home.temp:
            bot.sendMessage(chatId, `Mess 1`, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: `Вопрос 1`,
                            url: `https://forms.gle/rGW9pKB9Xzqdm7GT8`
                        }]
                    ]
                }
            }).then(() => {
                bot.sendMessage(chatId, `Mess 2`, {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: `Вопрос 2`,
                                url: `https://forms.gle/8Whtgw8rbgGY1f236`
                            }]
                        ]
                    }
                }).then(() => {
                    bot.sendMessage(chatId, `Mess 3`, {
                        reply_markup: {
                            inline_keyboard: [
                                [{
                                    text: `Вопрос 3`,
                                    url: `https://forms.gle/dnZF2D74Ce2NogQJA`
                                }]
                            ]
                        }
                    }).then(() => {
                        bot.sendMessage(chatId, `Mess 4`, {
                            reply_markup: {
                                inline_keyboard: [
                                    [{
                                        text: `Вопрос 4`,
                                        url: `https://forms.gle/GRGL1QvkfeBzNKyMA`
                                    }]
                                ]
                            }
                        })
                    })
                }) 
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

            // Calendar =====================================================================================
            // Item 1
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

            // Item 2
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

            // Item 3
        case kb.calendar.turnout:
            bot.sendPhoto(chatId, files.calendarPic3, {
                caption: messages.calendarObj.turnout,
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: kb.signUpBtn,
                            url: kb.signUpUrl,
                        }
                    ]]
                }
            })
            break
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

            // ServAll ========================================================================

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
                            url: kb.signUpUrl,
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
                            url: kb.signUpUrl,
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

            // Teaching ==============================================================================

        case kb.teaching.onePlusOne:
            bot.sendMessage(chatId, messages.teachingObj.onePlusOne, {
                reply_markup: {
                    keyboard: keyboard.onePlusOne
                }
            })
            break
        case kb.teaching.steps:
            bot.sendMessage(chatId, messages.teachingObj.stepsObj.stepInfo).then(() => {
                bot.sendMessage(chatId, messages.teachingObj.stepsObj.stepOne).then(() => {
                    bot.sendMessage(chatId, messages.teachingObj.stepsObj.stepTwo).then(() => {
                        bot.sendMessage(chatId, messages.teachingObj.stepsObj.stepThree).then(() => {
                            bot.sendMessage(chatId, messages.teachingObj.stepsObj.stepFour, {
                                reply_markup: {
                                    keyboard: keyboard.teaching
                                }
                            })
                        })
                    })
                })
            })
            
            
            
            break
        case kb.teaching.bibleSchool:
            bot.sendMessage(chatId, messages.teachingObj.bibleSchool, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Библейская школа',
                            url: 'https://youtube.com/playlist?list=PLjjvxd6WcKV2oN8Gv8aIvdZ657hLS_KNR'
                        }]
                    ]
                }
            })
            break
        case kb.teaching.goHome:
            bot.sendMessage(chatId, kb.homeBtn, {
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
                            text: kb.respondBtn,
                            url: kb.respondUrl,
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
                            text: kb.respondBtn,
                            url: kb.respondUrl,
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

            // Materials For Small Groups ==============================================================================
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
                            url: 'https://www.youtube.com/watch?v=GKMrWLKYXPQ'
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
    }
})