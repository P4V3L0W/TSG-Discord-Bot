const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Donations')
    .setURL('https://thesyndicategamers.com/index.php?donate/the-syndicate-gamers.1/donate')
    .setColor(client.config.clGreen)
    .setDescription('The Syndicate Gamers');
    
    msg.channel.send({embed});
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    delete: false,
    permLevel: 0
};

exports.help = {
    name: 'donate',
    description: 'Posts a link to the unban-request form in forum.',
    usage: '\`!donate\`'
};