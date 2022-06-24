let handler = async (m, { conn }) => {
let str = `*(￣ヘ￣）HEMM*\nAda Apa Kak. Mau Saya *PUKUL?*

`.trim()
conn.send2But(m.chat, str, wm, 'Mauu', '.mau', 'Nggak', '.nggak',m)
conn.reply(str)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
