const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    // channel name
    let id = msg.createdTimestamp.toString().substr(9, 4) + msg.author.discriminator;

    // channel creation and permissions
    msg.guild.createChannel(`ticket-${id}`, { type: 'text' })
        .then(async c => {
            c.setParent(client.config.ticketcategory);
            c.overwritePermissions(msg.guild.defaultRole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false
            });
            c.overwritePermissions(msg.member, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
            });
            c.overwritePermissions(msg.guild.roles.find(r => r.name === 'Leader'), {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
            });
            c.overwritePermissions(msg.guild.roles.find(r => r.name === 'Co-Leader'), {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
            });
            c.setTopic(`${msg.author} | ${args.join(' ')}`);
            c.send(`${msg.guild.roles.find(r => r.name === 'Leader')} ${msg.guild.roles.find(r => r.name === 'Co-Leader')} a new ticket has been created by ${msg.member}`);
        })
        .catch(console.error);
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