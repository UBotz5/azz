let handler = async(m, { conn, text, participants }) => {
  let teks = `〔══✪〘 *👥 Tag All* 〙✪══〕
\n➲ *Pesan : ${text ? text : 'Kosong'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` ⭔ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n*By Admin Tercinta*`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall|tagal|tall|t)$/i

handler.group = true
handler.admin = true
handler.botadmin = true
module.exports = handler
