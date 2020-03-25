const Discord = require('discord.js');

module.exports = member => {
    if (member.user == null || member.user.bot) return; // Only users not bots

    console.log(`${member.user.username} joined the server. Trying to add role.`);

    try {
        let role = member.guild.roles.find(r => r.id === '673528470550216704');

        member.addRole(role);
        console.log(`Success. ${member.user.username} has gotten the role ${role.name}`);
        return;        
    } catch (error) {
        console.log(`Failed giving the role to ${member.user.username}.`);
        console.error(error);
        return;
    }
    
};