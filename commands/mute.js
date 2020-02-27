const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    //             if (args.length != 3) return msg.channel.send('Usage: !mute <name> <duration>');

//             let person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]));
//             if (!person) return msg.channel.send('User not found!');

//             let muterole = msg.guild.roles.find(role => role.name === 'muted');
//             if (!muterole) return msg.channel.send('Role not found!');

//             let time = args[2];
//             if (!time) return msg.channel.send('no duration');

//             if (!person.roles.find(role => role === muterole)) {
//                 person.addRole(muterole);
//             }

//             msg.channel.send(`${person.user.tag} has been muted for ${ms(ms(time))}`)

//             setTimeout(function () {
//                 person.removeRole(muterole.id);
//                 msg.channel.send(`${person.user.tag} has been unmuted.`);
//             }, ms(time))
};

exports.conf = {
    enabled: true,
    allowDMs: false,
    aliases: [],
    delete: true,
    permLevel: 110
};

exports.help = {
    name: 'mute',
    description: '',
    usage: '\`!mute <User> <Duration>\`'
};