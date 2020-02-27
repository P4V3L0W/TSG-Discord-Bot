const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    if (args.length < 1) return msg.channel.send('Usage: ' + this.help.usage);
    if (args[0].match('[0-9]+') == null) return msg.channel.send('Usage: ' + this.help.usage);
    if (args[0] < 0 || args[0] > 100) return msg.channel.send('Usage: ' + this.help.usage);
    msg.channel.bulkDelete(args[0]);
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    delete: true,
    permLevel: 60
};

exports.help = {
    name: 'purge',
    description: 'Deletes the last X messages.',
    usage: '\`!purge <0 - 100>\`'
};