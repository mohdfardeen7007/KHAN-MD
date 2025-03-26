const { cmd } = require('../command');
cmd(
    {
        pattern: 'tag',
        alias: ['idk', 'stake'],
        desc: 'tag',
        category: 'sticker',
        use: '<reply media or URL>',
        filename: __filename,
    },
    async (conn, mek, m, { quoted, args, q, reply, from }) => {
            var { participants } = await conn.groupMetadata(from).catch(() => {});
            if (!q) {
              await reply('*Please provide a message to send.* ℹ️');
        return conn.sendMessage(from, { text: q, mentions: participants.map(a => a.id), linkPreview: true }, { quoted: mek });
        } else {
            return reply("*ded.*");
        }
    }
);
