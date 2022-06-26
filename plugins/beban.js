let handler = async (m, { conn }) => {
let caption = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
 |  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`

conn.sendBut( m.chat, caption, ``, `OKE KAK><`,  m)

       }
       
handler.customPrefix = /^(intro)/i
handler.command = new RegExp
module.exports = handler
