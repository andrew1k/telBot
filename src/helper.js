module.exports = {
    logStart() {
        console.log('App has been started...');
    },

    getChatId(msg) {
        return msg.chat.id
    }
}