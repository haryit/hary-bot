
const fs = require('fs')
const chalk = require('chalk')

//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}

//settings
global.owner = ['6282273128721','62882015159304'] //owner number +6282273128721
global.pemilik = ['6282273128721'] //owner number +6282273128721
global.premium = ['6282273128721'] //premium number +6282273128721
global.pengguna = 'HARY-IT' //username
global.footer = 'HARY-IT'
global.botnma = 'HARY-IT' //bot name
global.ownernma = 'HARY-IT' //owner name
global.packname = 'HARY-IT' //sticker package name
global.author = 'HARY-IT' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '🔵' //sp
global.mess = {
    success: 'Done!',
    admin: '*This feature is only for admin!*',
    botAdmin: '*zim bot  must be admin first!*',
    owner: '*this feature is only for owner*',
    group: '*Feature is only for groups!*',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: '*whoa wait a moment zim bot proccessing*',
    endLimit: '*Your daily limit has expired the limit will be reseted every 12 hours*',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.thumb = fs.readFileSync('logo.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
