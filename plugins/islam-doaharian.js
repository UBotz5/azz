let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(global.wait)
  let res = await fetch('https://islamic-api-zhirrr.vercel.app/api/doaharian')
  let son = await res.json()
  shyi = son.data
  let json = shyi[Math.floor(Math.random() * shyi.length)]
  let caption = `
*─────────[ Doa Harian ]─────────*
*${json.title}*
${json.arabic}
${json.latin}

*Artinya:*
_"${json.translation}"_
`.trim()
  await m.reply(caption)
}
handler.help = ['doaharian']
handler.tags = ['islam']
handler.command = /^(doaharian)$/i

module.exports = handler
