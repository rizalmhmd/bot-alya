const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6281333154367']
global.premium = ['6281333154367']
global.ownername = '𝚉𝚊𝚕𝚕'
global.botname = '𝙕𝘼𝙇𝙇𝙭𝘽𝙊𝙏𝙕'
global.packname = '© by 𝙕𝘼𝙇𝙇𝙭𝘽𝙊𝙏𝙕'
global.gc = 'https://bit.ly/3KMlmv2'
global.linkyt = 'https://github.com/rizalmhmd'
global.linkgc = 'https://chat.whatsapp.com/DwP6uHYBWBc6TBSsNJrzwN'
global.limitawal = '100'
global.author = '@alya.xzy'
global.sessionName = 'polo'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = 'terserah'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.gambar = 'https://telegra.ph/file/7858fc96fffda74b3ab44.jpg' //disini gambar bot nya lu bisa ganti pink gambar ini dengan link gambar punya lu
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
