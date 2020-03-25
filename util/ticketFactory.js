const Discord = require('discord.js');
const bot = new Discord.Client();

exports.create = (client, params, result) => {
    if (params.length != 5) return; // type, name, author, [roles], topic

    var guild = client.guilds.find(g => g.id === client.config.guild);
    var type = params[0];
    var name = params[1];
    var author = params[2];
    var role = params[3];
    var topic = params[4];

    var channelID = 0;

    guild.createChannel(name, type)
        .then(async c => {
            c.setParent(client.config.ticketcategory);
            c.overwritePermissions(guild.defaultRole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false
            });
            c.overwritePermissions(author, { // allowed author
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
            });
            c.overwritePermissions(role, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
            });
            if (type === 'ticket') {
                c.setTopic(`${author.username} | ${topic}`);
                c.send(`${guild.roles.find(r => r.name === 'Leader')} ${guild.roles.find(r => r.name === 'Co-Leader')} a new ticket has been created by ${author}`);
            } else {
                c.setTopic(`${author.username} | ${type}`);
                c.send(`${role} a new ${type} has been created by ${author}`);
            }

            result.num = c.id;
            
        })
        .catch(console.error);
}