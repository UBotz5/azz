let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_Online_* 
*ðŸ“®: HAI SAYA ©AzzBotz SILAHKAN KLIK BUTTON DI BAWAH!*
`.trim()
conn.sendButtonImg(m.chat, await (await fetch(fla + 'uy apaan')).buffer(), ext, 'bot online', 'COMMAND', '.menu', m)

}
handler.customPrefix = /^(bre|azzbotz|azz|menu|hai|hallo|hii|hello|cuy)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
