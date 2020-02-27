const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    msg.channel.send('pong');
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