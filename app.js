const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    client.user.setGame(`-report [@name] [reason]`);
    console.log(`${client.guilds.size} Servers,  ${client.users.size} Users, \n Online!`);
  });

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'joins');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Everyone please welcome our newest member, ${member}`);
});

var prefix = "-report"
var prefix2 = "-"
client.on('message', message => {
	if (message.content === '-avatar') {
	  message.reply(message.author.avatarURL);
	}
	
client.on('message', message => {
	if (message.content === '-avatar') {
	    const number = Math.floor(Math.random() * 6) + 1;
		message.channel.send(`Your Report Number Is #**${number}**`);
	

	if (message.author.bot) return;

	if (message.content.includes('delete this message report bot')) {
		message.delete();
    }

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix2 + `ping`)) {
		message.channel.send('Pinging...').then(sent => {
			sent.edit(`Pong!\nTook \`${(sent.createdTimestamp - message.createdTimestamp) / 2}\`ms`)
		  })
		}

		if (message.content.startsWith(prefix + ``)) {
		message.reply('Thank You For Using Our Report System! You Will Shortly Get A DM From Staff!');
	} else

client.login(process.env.BOT_TOKEN);
