const Discord = require('discord.js');

const bot = new Discord.Client();

exports.run = async (client, msg, args) => {
    let exlude = ['token', 'clGreen', 'clYellow', 'clRed'];
    let desc = '';

    for (var key in client.config){
        if (!exlude.includes(key)){
            desc += `${key}: ${client.config[key]}\n`;
        }
    }

    let embed = new Discord.RichEmbed()
    .setTitle('Config')
    .setColor(client.config.clYellow)
    .setDescription(desc);

    msg.channel.send({embed});
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    delete: false,
    permLevel: 80
};

exports.help = {
    name: 'config',
    description: 'Change internal properties and adresses',
    usage: '\`!config <property> <value>\`'
};