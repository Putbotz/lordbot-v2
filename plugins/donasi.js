let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Maxis (6014736695) 
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/60147366955
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
