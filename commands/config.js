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

    // bot.on('message', m => {
    //     var channel = m.guild.channels.get('12312321321');
    //     m.channel.send('Fill out the following and form and post it in this channel.\n\nThe kS Community will have a look at your application and will decide within the next week.\n\n'
    //     + '__**Personal Info**__\n\n'
    //     + 'In-Game Name:\n'
    //     + 'Your Age:\n'
    //     + 'Country:\n'
    //     + 'Previous Clans:\n'
    //     + '__**[TsG] Info**__\n\n'
    //     + 'Which division are you wanting to be your primary division?\n'
    //     + 'If you choose Kombat Syndicate, which games do you want to join?\n'
    //     + 'Which games do you actively play?\n'
    //     + 'Why are you interested in joining [TsG]?\n'
    //     + 'What skills and attributes can you add to our community?\n'
    //     + 'How did you hear about us?\n'
    //     + 'What made you pick [TsG]?\n'
    //     + '__**Contact Info (Optional)**__\n\n'
    //     + 'Discord:\n'
    //     + 'Steam:'
    //     + 'Youtube:'
    //     + 'Others:');
    // })


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