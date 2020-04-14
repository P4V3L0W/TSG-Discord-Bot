const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

module.exports = async msg => {
    if (msg.mentions.everyone || msg.mentions.users > 0 || msg.mentions.roles > 0){
        let logEmbed = new Discord.RichEmbed() // create a new embed
        .setTitle('Ghostping') // bascially just styling the embed from here
        .setDescription('Ghostping detected!')
        .setColor("#fc03c2")
        .addField('Message:', msg.content)
        .addField('Deleted by:', msg.author.tag)
        .addField('Deleted in:', msg.channel)
        .setTimestamp();
    } else {
        let logEmbed = new Discord.RichEmbed() // create a new embed
        .setTitle('Deleted Message') // bascially just styling the embed from here
        .setDescription('A message from a user was deleted')
        .setColor("#fc03c2")
        .addField('Message:', msg.content)
        .addField('Deleted by:', msg.author.tag)
        .addField('Deleted in:', msg.channel)
        .setTimestamp();
    }

    let logChannel = client.channels.get('698494655536431155').send(logEmbed); // log the message to a specific channel called "logs"
}