const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    if (args.length != 1) return msg.channel.send('Usage: ' + this.help.usage);
    if (!client.commands.has(args[0])) return msg.channel.send('Command doesn\'t exist');

    let cmd = client.commands.get(command);
    if (cmd.help.name === this.help.name) return msg.channel.send('You cannot deactivate this command!')

    cmd.conf.enabled = !cmd.conf.enabled;
    return msg.channel.send('Command ' + cmd.help.name + ' successfully ' + cmd.conf.enabled ? 'activated.' : 'deactivated.');
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    delete: false,
    permLevel: 80
};

exports.help = {
    name: 'activate',
    description: 'Activates or deactivates a command.',
    usage: '\`!activate <command>\`'
};