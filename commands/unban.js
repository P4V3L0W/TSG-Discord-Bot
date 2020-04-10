const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Unban Request')
    .setURL('https://thesyndicategamers.com/index.php?form/3/select')
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
    name: 'unban',
    description: 'Posts a link to the unban-request form in forum.',
    usage: '\`!unban\`'
};