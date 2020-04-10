const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    let ping = Date.now() - msg.createdTimestamp + " ms";;

    msg.channel.send(':ping_pong: **Pong!**\n\n'
                    +'**Latency**\n'
                    +ping);
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [], //zB !m = !mute
    delete: false,
    permLevel: 0
};

exports.help = {
    name: 'ping',
    description: 'pong',
    usage: '\`!ping\`'
};