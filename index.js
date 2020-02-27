const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

client.config = require('./config.json');

// logging
const log = msg => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg}`);
};

// commands
client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    log('============================================');
    log(`Loading a total of ${files.length} commands.`);

    files.forEach(f => {
        let props = require(`./commands/${f}`);
        log(`Command loaded: ${props.help.name}`);
        client.commands.set(props.help.name, props);
    });
});

// login
client.login(client.config.token);