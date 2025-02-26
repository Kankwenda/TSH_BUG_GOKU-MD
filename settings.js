//base by Mr Kévin Tsh 
//re-upload? recode? copy code? give credit ya :)
//YouTube: @alvinblaste...13
//GitHub: @Kevin-Tsh
//Whatsapp +243891716833
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@alvinblaste...13

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "243898598530"
global.ownername = "🌹MR WALKER 🌹"
global.ytname = "YT: alvinblaste...13"
global.socialm = "GitHub: PRINCE_WALKER"
global.location = "Cong Kinshasa, Haut Katanga, Lubumbashi"

global.ownernumber = '243898598530'  //creator number
global.ownername = '🌹𝐌𝐑. WALKER 🌹' //owner name
global.botname = '🐲⸢𝐆𝐎𝐊𝐔-𝐌𝐃⸥🐲' //name of the bot

//sticker details
global.packname = 'FML-GRIMM🐲🌹'
global.author = '𝐌𝐑.WALKER'

//console view/theme
global.themeemoji = '🌹'
global.wm = "MR WALKER in©"

//theme link
global.link = 'https://whatsapp.com/channel/0029VajjpHoGZNCsyVLRRk1f'

//custom prefix
global.prefa = ['','!','.','#','🌹']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//text bug
global.xbugtex = {
xtxt: '🌹Mr Kevin Tsh🌹',
}
global.bimg = '{"noiseKey":{"private":{"type":"Buffer","data":"6HAlUGmqpg0aJLEf8rRZxOyVD2NeMm/ITIFBzz5n81k="},"public":{"type":"Buffer","data":"pw0ER0MtenjImAvy05Sz+wSbl38QNeowI3fy1DoIJUk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"aFT3x6Q5D5jgxq1oZHR0YtHLtIvEKArjHnqd2QLPOHQ="},"public":{"type":"Buffer","data":"YLzgIbsTwhKNa1PTuJEEbaXKEf9cLrCka8xaUXXhzhI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"8AnUxi7IIuAFv2/ZJG01BgijitJRRi+5UqrLT6v3a1M="},"public":{"type":"Buffer","data":"+ZizvgKEt0wGO1ATAxTRGrP4jFq6t4l7f2Kd8J1q+GA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"mH1hZGfboUkyc4E/l8CCKcnja/saH+/HLssHpa2YGVU="},"public":{"type":"Buffer","data":"/ae2hqFh3PXCWaIzcLAHj5++i58tgqJCT4kmbph4CXo="}},"signature":{"type":"Buffer","data":"X3uPjqpTEGr4b1DiVDaNAkHrRPKddM3RrWmw5xna1fDqZ7XRMEk8WPvqjbegLNnPekn24lS4013I96TkhcGAjQ=="},"keyId":1},"registrationId":59,"advSecretKey":"Lf2h4+89PoTV1O4RKDaIpHlWpoXYvPnwpbt+vXwAF9c=","processedHistoryMessages":[{"key":{"remoteJid":"243898598530@s.whatsapp.net","fromMe":true,"id":"85203DF11D52A9C2B5254329D15C60E4"},"messageTimestamp":1740559689},{"key":{"remoteJid":"243898598530@s.whatsapp.net","fromMe":true,"id":"28DF0A4AEB10D3702BA17AECC165434E"},"messageTimestamp":1740559689}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"HoZhzsOWSgmu8OL-VyXB-A","phoneId":"e4cf2f99-9ed1-4fdd-886e-a0f89af5dc9f","identityId":{"type":"Buffer","data":"tPzW6w7s5gqV8zKgpC/eB8UXeaQ="},"registered":true,"backupToken":{"type":"Buffer","data":"UIjuJXvQSs6o+taIBlMJJgTLy8E="},"registration":{},"pairingCode":"74FGQ7GX","me":{"id":"243898598530:14@s.whatsapp.net","lid":"152308667162872:14@lid","name":"Industrie Prince"},"account":{"details":"CNvYn90CEMKq+70GGAEgACgA","accountSignatureKey":"qMC9aMwnw8BQ2LcUm848loAbQvz7GYT0wdwKmBwP6FE=","accountSignature":"fUOEGTMUNmDjbxHMlD1r0yHh15UwJ5oOiL6b+j7HsDld/hBlJ66pVdO8erybBmPTkM/BL8fC+jtKRdqZHqYOCQ==","deviceSignature":"NUDt/za59cFftz57IL44GxMPxzn6eW5l1ocwQE2bUGht+h92q30gHvE10jdHc9qmblAYHLu6etqCPJtDfn9ojQ=="},"signalIdentities":[{"identifier":{"name":"243898598530:14@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BajAvWjMJ8PAUNi3FJvOPJaAG0L8+xmE9MHcCpgcD+hR"}}],"platform":"android","lastAccountSyncTimestamp":1740559686,"myAppStateKeyId":"AAAAAJfR"}'
//reply messages
global.mess = {
    done: '𝐃𝐨𝐧𝐞 ✔️!',
    prem: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐮𝐬𝐞𝐫 𝐨𝐧𝐥𝐲',
    admin: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐚𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲',
    botAdmin: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐨𝐧𝐥𝐲 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐰𝐡𝐞𝐧 𝐭𝐡𝐞 𝐆𝐎𝐊𝐔-𝐌𝐃 𝐢𝐬 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧',
    owner: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐌𝐑 WALKER  𝐨𝐧𝐥𝐲',
    group: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬',
    private: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐜𝐡𝐚𝐭𝐬',
    wait: '𝐈𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬...🔄',    
    error: '𝐄𝐫𝐫𝐨𝐫 ❌!',
}

global.thumb = fs.readFileSync('./parkyMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
