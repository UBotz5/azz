let handler = async (m, { conn }) => {
let str = `*(￣ヘ￣）HEMM*\nApa Kaoo. Mau Ngajak *GELUD HAH?*

`.trim()
conn.send2But(m.chat, str, wm, 'Mauu', '.mau', 'Nggak', '.nggak',m)
conn.reply(str)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
