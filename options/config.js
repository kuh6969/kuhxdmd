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
wait: '*[  ADS / IKLAN BOT  ]*\n\n*Harga Pulsa*\n10k > Rp11.000\n20k  > Rp21.000\n50k  > Rp50.000\n100k > Rp99.000\ndenom lain bisa ditanyakan. khusus AXIS, INDOSAT, THREE harga lebih murah. harga diatas hanya patokan saja\n\n*Harga Token Listrik*\n20k > Rp22.000\n50k > Rp51.500\n100k > Rp101.000\n500k > Rp500.000\n\nOrder : wa.me/12816245470\n\n\nSupport BOT Ini Dengan Membeli Produk Digital Seperti *PULSA / PAKET DATA / TOKEN LISTRIK / TOPUP GAME*\n\nKeuntungan Sebagian Besar Akan Digunakan Untuk Membeli Server Database, Agar BOT Berjalan Dengan Normal.\n\nThanks...\n-------------------\nOfficial Website : ramadhankukuh.my.id\n\nEmail For Business : kuhra@ramadhankukuh.my.id\n\n*Paypal :* paypal.me/ramadhankukuh\n*Trakteer :* trakteer.id/ramadhankukuh',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
