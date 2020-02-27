const Discord = require('discord.js');
const config = require('../config.json');
const moment = require('moment');

exports.run = async (client, msg, args) => {
    if (args.length < 1 || args.length > 1990) return msg.channel.send('Usage: ' + this.help.usage);

    client.guilds
        .find(g => g.id === config.guild).channels
        .find(c => c.id === config.feedbackchannel)
        .send('```\n' + args.join(' ') + '```');

    let embed = new Discord.RichEmbed()
    .setTitle('Feedback submitted!')
    .setColor(config.clGreen)
    .setDescription('Thanks for your opinion.');
    
    msg.channel.send({embed});
};

exports.conf = {
    enabled: true,
    allowDMs: true,
    aliases: [],
    delete: true,
    permLevel: 30
};

exports.help = {
    name: 'feedback',
    description: 'Send an anonymous message to the leader channel.\nMax. 2000 characters.',
    usage: '\`!feedback <text>\`'
};