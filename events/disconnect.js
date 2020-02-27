module.exports = client => {
    client.guilds.forEach(g => {
        g.channels.forEach(c => {
            if (c.type === 'text' && c.name.startsWith('ticket-')) {
                console.log(`Deleting channel ${c.name} on Server ${g.name}`);
                c.delete();
            }
        })
    });

    console.log(`You have been disconnected at ${new Date()}`);
};