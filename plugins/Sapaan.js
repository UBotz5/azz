let handler = async (m, { conn }) => {
let str = `
⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
︵︵( ░░ )︵.︵.︵
(░░░░░░ ) ░░░ )
︶¯︶︶︶　^v^　　^v^
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪
`.trim()
conn.sendBut(m.chat, str, wm, 'Hello juga', 'hello juga',m)
conn.reply(str)

       }
       
handler.customPrefix = /^(hay|hey|helo)/i
handler.command = new RegExp
module.exports = handler
