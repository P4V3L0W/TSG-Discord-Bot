const Discord = require('discord.js');
const config = require('../config.json');
const moment = require('moment');

module.exports = async msg => {
    let client = msg.client;
    let prefix = config.prefix;

    if (msg.author.bot) return; // Doesn't answer to bots

    try {
        if (msg.channel.id === '320829336250875904') {
            msg.client.guilds
                .find(g => g.id === '323450816960921602').channels
                .find(c => c.id === '673173737012592640')
                .send(`${msg.member.displayName}: ${msg.content}`);
        } else if (msg.channel.id === '274863171087630336') {
            msg.client.guilds
                .find(g => g.id === '323450816960921602').channels
                .find(c => c.id === '673160169869410345')
                .send(`${msg.member.displayName}: ${msg.content}`);
        }
    } catch (error) {
        console.error(error);
    }

    // Command handling
    if (msg.content.startsWith(prefix)) {
        let command = msg.content.split(' ')[0].slice(prefix.length); // "!mute name 5m" -> command = "mute"
        let args = msg.content.split(' ').slice(1);                   // "!mute name 5m" -> args = ["name","5m"]

        if (!client.commands.has(command)) return msg.channel.send('Command doesn\'t exist');
        let cmd = client.commands.get(command);

        if (!cmd.conf.enabled) return msg.channel.send('Command is disabled!'); // check if enabled
        if (msg.channel.type === 'dm' && (cmd.conf.allowDMs === false)) return; // Only reacts to certain commands in DMs

        if (msg.channel.type === 'text') {
            let powerLevel = client.roles.get(msg.member.highestRole.name);
            if (cmd.conf.permLevel > powerLevel && msg.member.id != '278578257518133249') return msg.channel.send('You are not allowed to use this command!');
            if (cmd.conf.delete) msg.delete();
        }

        // cmd.run(client, msg, args);
        cmd.run(client, msg, args);
    }
}