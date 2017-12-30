const Discord = require('discord.js');
const client = new Discord.Client();
const number = Math.floor(Math.random() * 9999) + 1;
const roll = Math.floor(Math.random() * 6) + 1;

client.on("ready", () => {
    client.user.setGame(`-report [@name] [reason]`);
    console.log(`${client.guilds.size} Servers,  ${client.users.size} Users, \n Online!`);
});

// Join Messages
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'joins');
  if (!channel) return;
  channel.send(`Everyone please welcome our newest member, ${member}`);
});

var prefix = "-report"
client.on('message', message => {
	if (message.content === '-avatar') {
	  message.reply(message.author.avatarURL);
	}
	

	if (message.author.bot) return;

	if (message.content.includes('delete this message report bot')) {
		message.delete();
    }

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;
	
client.on('message', message => {
	if (message.content === '-ping') {
		message.channel.send('Pinging...').then(sent => {
			sent.edit(`Pong!\nTook \`${(sent.createdTimestamp - message.createdTimestamp) / 2}\`ms`)
		  })
		}
                 // -report sytem
		if (message.content.startsWith(prefix + ``)) {
			const number = Math.floor(Math.random() * 9999) + 1;
		message.reply(`Thanks For Using Our Report Sytem!, You Will Shortly Get A DM From A Staff Member! You Report Number Is **#${number}**`);
	} else
		
		if (message.content.startsWith(`-ping-s`)) {
		message.channel.send('Pong!');
	}
});

client.login(process.env.BOT_TOKEN);
