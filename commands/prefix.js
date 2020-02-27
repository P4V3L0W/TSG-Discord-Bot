const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, msg, args) => {
    if (args.length < 1) return msg.channel.send('Usage: ' + this.help.usage);
    if (args[0].length > 1 && args[0] !== 'clear') return msg.channel.send('Usage: ' + this.help.usage);

    let embed = new Discord.RichEmbed();

    if (args[0] === 'clear') {
        client.config.prefix = '!';
        save(client);
    
        embed.setColor(client.config.clGreen)
            .setTitle('Prefix reseted!')
            .setDescription(`Prefix successfully reseted to '!'`);
    } else {
        client.config.prefix = args[0];
        save(client);

        embed.setColor(client.config.clGreen)
            .setTitle('Prefix Changed')
            .setDescription(`Set to ${args[0]}`);
    }

    msg.channel.send({ embed });
};

function save(client){
    fs.writeFile('config.json', JSON.stringify(client.config, null, 2), () => { 
        console.log('saved data to json'); 
    });
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    delete: false,
    permLevel: 80
};

exports.help = {
    name: 'prefix',
    description: 'Changes the bots prefix. Standard is \'!\'',
    usage: '\`!prefix <character | clear>\`'
};