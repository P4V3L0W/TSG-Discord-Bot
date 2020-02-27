const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    msg.channel.send('<http://thesyndicategamers.com/index.php>');
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    delete: false,
    permLevel: 0
};

exports.help = {
    name: 'forum',
    description: 'Posts a link to the forum.',
    usage: '\`!forum\`'
};