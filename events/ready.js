const Discord = require('discord.js');
const moment = require('moment');

module.exports = client => {
    this.client = client;
    let confGuild = client.guilds.find(g => g.id === client.config.guild);

    const log = msg => {
        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg}`);
    };

    //check muted role
    if (client.commands.get('mute').conf.enabled) {
        if (!confGuild.roles.has('muted')) {
            //todo: add muted role
        }
    }

    // roles
    client.roles = new Discord.Collection();
    let roles = confGuild.roles;
    log('============================================');
    log(`Loading a total of ${roles.size} roles.`);
    roles.forEach(r => {
        log(`Role loaded: ${r.name}`) 
        switch (r.name) {
            case 'Founder':
                client.roles.set(r.name, 100);
                break;
            case 'Leader':
                client.roles.set(r.name, 90);
                break;
            case 'Co-Leader':
                client.roles.set(r.name, 80);
                break;
            case 'High Councillor':
                client.roles.set(r.name, 70);
                break;
            case 'Councillor':
                client.roles.set(r.name, 60);
                break;
            case 'Commander':
                client.roles.set(r.name, 50);
                break;
            case 'Master Admin':
                client.roles.set(r.name, 40);
                break;
            case 'Admin':
                client.roles.set(r.name, 30);
                break;
            case 'Friend of [kS]':
            case 'Aspire':
            case 'Honorable Member':
                client.roles.set(r.name, 20);
                break;
            default:
            //
        }

    });
    log('============================================');

    // ready
    log('Connected with ' + client.user.tag);
    console.log('__________________________________________________________________');

}