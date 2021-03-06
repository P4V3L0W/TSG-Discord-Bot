const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Forum')
    .setURL('http://thesyndicategamers.com/index.php')
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
    name: 'forum',
    description: 'Posts a link to the forum.',
    usage: '\`!forum\`'
};