const Discord = require('discord.js');
const ticketFactory = require('../util/ticketFactory');

exports.run = async (client, msg, args) => {
    var name = 'application';
    var params = ['application', name, msg.author, msg.guild.roles.find(r => r.name === 'kS Admins'), '']
    var result = { num: 0 };

    try {
        ticketFactory.create(client, params, result);
    } catch (error) {
        console.error(error);
    }


    setTimeout(() => {
        if (result.num != 0) {
            console.log('Si');
            msg.guild.channels.find(c => c.id === result.num).sendMessage('Fill out the following and form and post it in this channel.\n\nThe kS Community will have a look at your application and will decide within the next week.\n'
                + '\`\`\`'
                + '\n__**Personal Info**__\n'
                + '\nIn-Game Name:\n'
                + '\nYour Age:\n'
                + '\nCountry:\n'
                + '\nPrevious Clans:\n'
                + '\n__**[TsG] Info**__\n'
                + '\nWhich division are you wanting to be your primary division?\n'
                + '\nIf you choose Kombat Syndicate, which games do you want to join?\n'
                + '\nWhich games do you actively play?\n'
                + '\nWhy are you interested in joining [TsG]?\n'
                + '\nWhat skills and attributes can you add to our community?\n'
                + '\nHow did you hear about us?\n'
                + '\nWhat made you pick [TsG]?\n'
                + '\n__**Contact Info (Optional)**__\n'
                + '\nDiscord:\n'
                + '\nSteam:\n'
                + '\nYoutube:\n'
                + '\nOthers:\n'
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
    name: 'apply',
    description: 'Create an application Ticket',
    usage: '\`!apply\`'
};