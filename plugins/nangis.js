let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_sad_* 
*📮: KENAPA NANGIS!? ADA AKU DI SINI KOK SETIA MENEMANI KAMU*
`.trim()
conn.sendButtonImg(m.chat, await (await fetch(fla + 'JANGAN SEDIH')).buffer(), ext, 'sedih ya', 'COMMAND', '.menu', m)

}
handler.customPrefix = /^(😭|😔|🙃|🙂|🥺|😟|😥|😢|☹️|😓|😞|😖|😣|😩|😫)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
