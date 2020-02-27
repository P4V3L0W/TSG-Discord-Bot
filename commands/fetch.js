const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = async (client, msg, args) => {
    try {
        (msg.client.guilds.find(g => g.id === '274827898303676417').channels.find(c => c.id === '320829336250875904')).fetchMessages({ limit: 100 }).then(messages => {
            messages.forEach(m => {
                msg.client.guilds
                    .find(g => g.id === '323450816960921602').channels
                    .find(c => c.id === '673173737012592640')
                    .send(`${m.member.displayName}: ${m.content}`);
            });
        });

        (msg.client.guilds.find(g => g.id === '274827898303676417').channels.find(c => c.id === '274863171087630336')).fetchMessages({ limit: 100 }).then(messages => {
            messages.forEach(m => {
                msg.client.guilds
                    .find(g => g.id === '323450816960921602').channels
                    .find(c => c.id === '673160169869410345')
                    .send(`${m.member.displayName}: ${m.content}`);
            });
        });
    } catch (error) {
        console.error(error);
    }
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'fetch',
    description: '',
    usage: '\`!fetch <amount>\`'
};