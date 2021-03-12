// All from index.js

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







// let SGL = [] // Small Group Leader
// let SGM = [] // Small Group Member
// let FAQ = [] // Frequently Asked Questions
// let SERVUN = [] // Serv Unknown
// let PRAYFORM = [] // Pray form
// let SERVHI = [] // Serv Hire
// let OPOS = [] // One Plus One Student
// let OPOM = [] // Ono Plus One Mentor





// .then(() => {console.log('All Right');})
// .catch((err) => {console.log(err);})





// if (msg.text !== kb.smallGroups.sgLeader && msg.text !== kb.smallGroups.sgMap && msg.text !== kb.smallGroups.goHome) {
//     bot.on('message', msg => {
//         bot.forwardMessage(idAdmin, chatId, msg.message_id)
//         fs.writeFileSync('./data.txt', helper.debug(`Сообщение от вкладки 'Хочу стать участником Малой Группы' от ${msg.from.username}, текст: ${msg.text}`))
//         console.log(helper.debug(`Сообщение из 'Хочу стать участником Малой Группы' от ${msg.from.username}, текст: ${msg.text}`))
//     })
// }


            // // OnePlusOne
            // case kb.onePlusOne.findMentor:
            //     bot.sendMessage(chatId, messages.teachingObj.onePlusOneObj.onePlusOneStudent, {
            //         reply_markup: {
            //             inline_keyboard: [
            //                 [{
            //                     text: kb.respondBtn,
            //                     url: kb.respondUrl,
            //                 }]
            //             ]
            //         }
            //     })
            //     break
            // case kb.onePlusOne.becomeMentor:
            //     bot.sendMessage(chatId, messages.teachingObj.onePlusOneObj.onePlusOneMentor, {
            //         reply_markup: {
            //             inline_keyboard: [
            //                 [{
            //                     text: kb.respondBtn,
            //                     url: kb.respondUrl,
            //                 }]
            //             ]
            //         }
            //     })
            //     break
            // case kb.onePlusOne.backToTeaching:
            //     bot.sendMessage(chatId, messages.teaching, {
            //         reply_markup: {
            //             keyboard: keyboard.teaching
            //         }
            //     })
            //     break
    