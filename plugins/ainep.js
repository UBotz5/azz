let handler = async (m, { conn }) => {
let caption = `m.reply('Iya Ada Apa Sayyy' + readMore + 'yton🗿')`

conn.sendBut( m.chat, caption, ``, `Wkwk`,  m)

}

handler.customPrefix = /^(p|pp|ppp|pe|pee|pee)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler