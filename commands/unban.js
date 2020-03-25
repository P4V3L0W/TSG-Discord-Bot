const Discord = require('discord.js');
const ticketFactory = require('../util/ticketFactory');

exports.run = async (client, msg, args) => {
    var name = 'unban-request';
    var params = ['unban-request', name, msg.author, msg.guild.roles.find(r => r.name === 'Ban/Unban Team'), '']
    var result = { num: 0 };

    try {
        ticketFactory.create(client, params, result);
    } catch (error) {
        console.error(error);
    }

    setTimeout(() => {
        console.log('result = ' + result.num);
        if (result.num != 0) {
            console.log('Si');
            msg.guild.channels.find(c => c.id === result.num).sendMessage('Fill out the following and form and post it in this channel.\n'
                + '\`\`\`'
                + '\nYour In-Game Name:\n'
                + '\nPrevious names you have used:\n'
                + '\nOn which Server you got banned?:\n'
                + '\nName of Admin who banned you:\n'
                + '\nExplain the reason why you got banned: \n'
                + '\nExplain why do you think that you should be unbanned:\n'
                + '\nProvide a download link for the demo of your last match played on our servers and a screenshot of the ban message:\n'
                + '\`\`\`');
        }
    }, 2000);
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    delete: true,
    permLevel: 0
};

exports.help = {
    name: 'unban',
    description: 'Create an unban-request',
    usage: '\`!unban\`'
};