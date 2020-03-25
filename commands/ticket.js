const Discord = require('discord.js');
const ticketFactory = require('../util/ticketFactory');

exports.run = async (client, msg, args) => {
    var name = 'ticket-' + msg.createdTimestamp.toString().substr(9, 4) + msg.author.discriminator;
    var params = ['ticket', name, msg.author, msg.guild.roles.find(r => r.name === 'Leader'), args.join(' ')]
    var result = 0;

    try {
        ticketFactory.create(client, params, result);
    } catch (error) {
        console.error(error);
    }
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    delete: true,
    permLevel: 30
};

exports.help = {
    name: 'ticket',
    description: 'Creates a new ticket.',
    usage: '\`!ticket <topic>\`'
};