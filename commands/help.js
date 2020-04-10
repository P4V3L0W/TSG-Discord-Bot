const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (client, msg, args) => {

    // help all 
    if (args.length === 0) {
        let embed = new Discord.RichEmbed()
            .setTitle('Commands')
            .setColor(config.clYellow);

        client.commands.forEach(c => {
            if (c.conf.enabled && c.help.description !== '' && c.conf.permLevel <= 100) {
                embed.addField(`${c.help.name}`, `${c.help.usage}\n${c.help.description}`);
            }
        })

        msg.channel.send({ embed });
    } else {  // help command
        if (!client.commands.has(args[0])) return msg.channel.send('Command not found!');
        let command = client.commands.get(args[0]);
        if (command) {
            let embed = new Discord.RichEmbed()
                .setColor(config.clYellow)
                .setTitle(command.help.name)
                .addField('Description', `${command.help.description}`)
                .addField('Usage', `${command.help.usage}`)
                .addField('Role Restriction', `Level ${command.conf.permLevel}+ needed.`)
                .addField('Works in DM', `${command.conf.allowDMs ? 'Yes' : 'No'}`);
            msg.channel.send({ embed });
        }
    }
};

exports.conf = {
    enabled: true,
    allowDMs: true,
    aliases: [],
    delete: false,
    permLevel: 0
};

exports.help = {
    name: 'help',
    description: 'lol',
    usage: '\`!help <command>\`'
};