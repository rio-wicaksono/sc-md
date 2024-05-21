const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6285263390832'] 
global.namaowner = "RainStoreID"
global.namebot = "RainBotzz"
global.namabot = "RainBotzz"
global.footer = "RainStoreID"
//ur owner number
global.ownernomer = "6285263390832" //ur owner number2
global.ownerStore = "RainStoreID"
global.ownername = "RainStoreID" //ur owner name
global.botname = 'RainBotzz' //ur bot name
global.namaCreator = "RainStoreOD"//ur Creator name
global.ownernumber = '6285263390832' //ur owner number
global.ownername = 'RainStoreID' //ur owner name
//Sosmed 1
global.ytname = "YT: RainMc" //ur yt chanel name
global.socialm = "GitHub: -" //ur github or insta name
global.location = "Indonesia" //ur location
global.websitex = 'wa.me/6285263390832'
global.botname = "RainBotzz"
//new
global.namebot = "RainBotzz"
global.ownergc = "https://whatsapp.com/channel/0029VaEeYcRHbFV9gMv6G03P"
global.botname = "Created RainStoreID"
global.ownerNumber = ["6285263390832@s.whatsapp.net"]
global.ownerweb = "https://ptero.rainxzet.com"
// STICKER
global.themeemoji = '🪀'
global.xzn = 'pepek';
global.wm = "ptero.rainxzet.com"
global.packname = "Sticker By RainStoreID"
global.author = "RainStoreID\n\n"
//PREFIX
global.prefa = ['','!','.','#','&']
// Session
global.sessionName = 'session'//JANGAN DI UBAH
//TEKSPUSH
global.tekspushkon = ''
//API 
global.keyopenai ='iigf'
//SOSMED 2
global.myig = "-";
global.mytt = "https://tiktok.com/@cahyoshb";
global.mytw = "-";
global.mywa = "https://wa.me/6285263390832";
global.myyt = "https://youtube.com/@SafeStoreH";
global.mygc = "https://chat.whatsapp.com/CjRuVIjBOYeLEpflkvtO1z"
global.website = "ptero.rainxzet.cok";
// => PTERODACTYL
global.domain = 'https://domainElu.online' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '' // id eggs yang dipakai
global.location = '' // id location
//
global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://telegra.ph/file/adc6befed8ddc76fe2363.mp4' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
