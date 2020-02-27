const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle('I got the following DM commands:')
        .setColor(config.clGreen)
        .addField('😊 Feedback', '\`!feedback <text>\`\nSend feedback.', true)
        .addField('📄 Ticket', '\`!ticket <topic>\`\nOpen a Ticket.', true)
        .setThumbnail('https://i.imgur.com/rjeHWfH.jpg');
    msg.author.send({ embed });

    // Waiting for an answer
    try {
        let collector = new Discord.MessageCollector(msg.author.dmChannel, m => m.author.id === msg.author.id, { time: 10000, max: 1 });
        collector.on('collect', collected => {
            switch (collected.content) {
                case '1':
                case '1)':
                    collected.reply('1');
                    break;
                case '2':
                case '2)':
                    collected.reply('2');
                    break;
                case '3':
                case '3)':
                    collected.reply('3');
                    break;
                default:
            }
        });

        collector.on('end', () => {
            // do something
        });
    } catch (e) {
        console.error(e);
    }
};

exports.conf = {
    enabled: true,
    allowDMs: true,
    aliases: [],
    delete: true,
    permLevel: 110
};

exports.help = {
    name: 'dm',
    description: '',
    usage: '\`!dm\`'
};