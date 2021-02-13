const kb = require('./keyboard-buttons')
// Keyboard 
module.exports = {
    home: [
        [kb.home.temp],
        [kb.home.calendar],
        [kb.home.smallGroups, kb.home.serv],
        [kb.home.teaching, kb.home.notes],
        [kb.home.pray, kb.home.faq],
        [kb.home.materialsForSG]
    ],
    calendar: [
        [kb.calendar.game],
        [kb.calendar.pray],
        [kb.calendar.turnout],
        [kb.calendar.teaWithPastor],
        [kb.calendar.goHome],
    ],
    smallGroups: [
        [kb.smallGroups.sgMember],
        [kb.smallGroups.sgLeader],
        [kb.smallGroups.sgMap],
        [kb.smallGroups.goHome],
    ],
    serv: [
        [kb.serv.servAll],
        [kb.serv.servHire],
        [kb.serv.servunknown],
        [kb.serv.goHome],
    ],
    servAll: [
        [kb.servAll.servMyGeneration, kb.servAll.servWorship],
        [kb.servAll.servInfo, kb.servAll.servCafe],
        [kb.servAll.servAsher, kb.servAll.servCommunion],
        [kb.servAll.servChild, kb.servAll.servComunication],
        [kb.servAll.servMeeting, kb.servAll.servSocialWeb],
        [kb.servAll.backToServ] 
    ],
    teaching: [
        [kb.teaching.onePlusOne],
        [kb.teaching.steps],
        [kb.teaching.bibleSchool],
        [kb.teaching.goHome],
    ],
    onePlusOne: [
        [kb.onePlusOne.findMentor],
        [kb.onePlusOne.becomeMentor],
        [kb.onePlusOne.backToTeaching],
    ],
    materialsForSG: [
        [kb.materialsForSG.msgHelp, kb.materialsForSG.msgNotes],
        [kb.materialsForSG.msgWorship, kb.materialsForSG.msgBooks],
        [kb.materialsForSG.msgVideo, kb.materialsForSG.msgMeetings],
        [kb.materialsForSG.goHome]
    ],
    
}