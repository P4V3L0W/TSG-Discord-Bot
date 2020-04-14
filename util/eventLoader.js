const reqEvent = (event) => require(`../events/${event}`);

module.exports = client => {

  //////////////////////////////////////////////////////////////////////
  /////////////////////////// Bot Events ///////////////////////////////
  //////////////////////////////////////////////////////////////////////

  client.on('ready', () => reqEvent('ready')(client));                // Bot is online
  client.on('reconnecting', () => reqEvent('reconnecting')(client));  // Bot reconnects to Websocket
  client.on('disconnect', () => reqEvent('disconnect')(client));      // Bot disconnects from Websocket
  client.on('debug', console.log);                                    // Debugging

  //////////////////////////////////////////////////////////////////////
  /////////////////////////// User Events //////////////////////////////
  //////////////////////////////////////////////////////////////////////

  client.on('message', reqEvent('message'));                          // Any Message written
  // client.on('messageDelete', reqEvent('messagedelete'));               // Any Message deleted
  client.on('guildMemberAdd', reqEvent('memberadd'));                 // User joins the Guild

};