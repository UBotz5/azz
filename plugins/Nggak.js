let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Gelud : *_Gak Mau_* 
  
Heheh anak baikk, bagus sayangg
Lopyu dah buat kamu ><
`.trim()
conn.sendButtonImg(m.chat, await (await fetch(fla + 'Anak Baik')).buffer(), ext, 'Nggak', '😇', '😇', m)

       }
       
handler.command = /^(nggak)$/i
module.exports = handler
