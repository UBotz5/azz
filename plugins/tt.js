let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪TIKTOK⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ *_TIKTOK OWNER_*
║│➸  *Tidack Punya TikTok. TikTok Hanyalah Alat*
╰─────────❉
▌│█║▌║▌║║▌║▌║█│▌
⳹ ❋ཻུ۪۪©AzzBotz⳹ ❋ཻུ۪۪⸙ ᴿ᭄ AZZ ×፝֟͜×
`.trim()
conn.sendBut(m.chat, str, `© AzzBotz`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['tiktok']
handler.tags = ['info']
handler.command = /^tt$/i

module.exports = handler
