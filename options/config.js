// CREATED BY NEOXY TEAM !!

const fs = require('fs')
const chalk = require('chalk')

// MY OTHERS
global.owner = ['12816245470']
global.premium = ['12816245470']
global.botname = 'KuhXD'
global.packname = 'KuhXD - Bot WhatsApp'
global.author = 'IG : @ramadhankukuh'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.footer = '© Created By Kukuh Ramadhan'
global.sp = '⭔'
global.limitawal = {
premium: "Infinity",
free: 69
}

// THUMB
global.image = fs.readFileSync('./connect/image/logo.jpg')
global.thumbnail = fs.readFileSync('./connect/image/thumb.jpg')

// MESSAGE
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: '*LOADING . . .*\n\n*[  ADS BOT  ]*\n\n*Price List Pulsa Indonesia*\n10.000  > 11.000\n20.000  > 21.000\n50.000  > 50.000\n100.000 > 99.000\n\n*Price List Pulsa China*\n100 ¥ > 305.000\n\n*Price List Pulsa Malaysia*\n100 RM > 350.000\n\nOrder? ↓\nwa.me/12816245470\n\n-------------------\n*More Info Ads ↓*\nwww.ramadhankukuh.my.id/bot-ads\n\n*Email For Business ↓*\nkuhra@ramadhankukuh.my.id\n\n*Paypal :* paypal.me/ramadhankukuh\n*Trakteer :* trakteer.id/ramadhankukuh',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
