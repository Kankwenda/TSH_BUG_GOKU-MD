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
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//text bug
global.xbugtex = {
xtxt: '🌹Mr Kevin Tsh🌹',
}
global.bimg = '{"noiseKey":{"private":{"type":"Buffer","data":"6I4GVEZ9kBgOjYW4DcsJ1dh7QBQ/VLE0Kgp/8SKmAUU="},"public":{"type":"Buffer","data":"OATJFwacz0z4CHudtryq11zWUNp68P82w25IxvmPHjw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YK0GZCeliFdtJ1HseV7rsZf0GOcXVrv8ndhnpShgAG0="},"public":{"type":"Buffer","data":"ubTa/8nCeI8JdkIQN5uFKkXV0OcOumgje6ACV11LODU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"wFa88U/b5KjhlwGkiDQCJy/SplvJ/hI4OVFjeaOZqGM="},"public":{"type":"Buffer","data":"9kKzhzkRZNWUJFX49UfUmAobmBOvH8GUf/3ir2nHLg4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"wH3fQ4OHcQGkcTRSShXzo9baf5/+zvT5hh51HHVENks="},"public":{"type":"Buffer","data":"3TcqzuKNfpKUUzpNWmJiNYrR6Y8cA3W7G/oxkyeNzD0="}},"signature":{"type":"Buffer","data":"fY7OUmWtjrssU6pXyiHLmLCNzfysjx4j65qxfHNbo6ZCVMrS/KbZFPEQrhvtbApPHDBZXoj5Xhu0WFKsTZl7jA=="},"keyId":1},"registrationId":171,"advSecretKey":"eDn1cPMRl0w64Os/cSPHlxcAZfXsxRiipdO2xvzeRf4=","processedHistoryMessages":[{"key":{"remoteJid":"243898598530@s.whatsapp.net","fromMe":true,"id":"BE955C3A30F126EAC776C02391E28D96"},"messageTimestamp":1740144593},{"key":{"remoteJid":"243898598530@s.whatsapp.net","fromMe":true,"id":"0D47B832B85A2FF1146EA70A4B71B8B7"},"messageTimestamp":1740144593}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"RomoVwQ-TGORcQ1C9uyNrQ","phoneId":"5c42e9dc-4002-43f3-890b-cee2984af995","identityId":{"type":"Buffer","data":"WoCwRFpsfPOTLvl0cO3UYUM6inA="},"registered":true,"backupToken":{"type":"Buffer","data":"AvNre83j3MnM+CWGie2tPM5UagQ="},"registration":{},"pairingCode":"SXY95GT4","me":{"id":"243898598530:12@s.whatsapp.net","lid":"152308667162872:12@lid","name":"Industrie Prince"},"account":{"details":"CNrYn90CEMr/4b0GGAEgACgA","accountSignatureKey":"qMC9aMwnw8BQ2LcUm848loAbQvz7GYT0wdwKmBwP6FE=","accountSignature":"y12mL2KNGYIf2eXOShIhUaEl2b5IQlcqp31joNhxKO/eHYbelqEChm7Sr3+MxKwZ9rTHXwmzoWyd8TQFgnBPDw==","deviceSignature":"kDczs4DWmS5d+lk9YZKKZnZpQQ/GFPcmJWdwYUF3Cv086ToMToWk2XnbcSMppBbXE4aLApOZkrbJAr1LcWqQgQ=="},"signalIdentities":[{"identifier":{"name":"243898598530:12@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BajAvWjMJ8PAUNi3FJvOPJaAG0L8+xmE9MHcCpgcD+hR"}}],"platform":"android","lastAccountSyncTimestamp":1740144590,"myAppStateKeyId":"AAAAAJfO"}'
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
