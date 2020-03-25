const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
        if (msg.channel.parentID === client.config.ticketcategory && msg.channel.name !== 'feedback') {
            msg.channel.delete(`Ticket has been closed by ${msg.member}.`);
        } else {
            console.log('lel');
        }
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    delete: false,
    permLevel: 0
};

exports.help = {
    name: 'close',
    description: 'Closes a ticket channel',
    usage: '\`!close\`'
};