let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Gelud : *_Mau_* 
*Lah ayo gelud anyingg, maju lu asu bgsddd sini asuu
Serlok cok serlok sini gelud kita. Asuu kauuu 😠*
`.trim()
conn.sendButtonImg(m.chat, await (await fetch(fla + 'Gelud')).buffer(), ext, 'Pukul', '', '', m)

       }
       
handler.customPrefix = /^(mau)$/i
handler.command = new RegExp
module.exports = handler
