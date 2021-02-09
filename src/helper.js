module.exports = {
    logStart() {
        console.log('App has been started...');
    },

    getChatId(msg) {
        return msg.chat.id
    },

    debug(obj = {}) {
        return JSON.stringify(obj, null, 4)
    },

    pushToArr(arr, data) {
        arr = arr.push(data)
        console.log('Successfully added');
    },

}