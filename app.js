const Discord = require('discord.js');
const client = new Discord.Client();
const number = Math.floor(Math.random() * 9999) + 1;

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
			const number = Math.floor(Math.random() * 9999) + 1;
		message.reply(`Thanks For Using Our Report Sytem! You Will Shortly Get A DM From A Staff Member! You Report Number Is **#${number}**`);
	} else

	if (message.content.startsWith(`-say`)) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
	if (message.content.startsWith(prefix2 + `ping simple`)) {
		message.channel.send('Pong!');
	}
});

client.login(process.env.BOT_TOKEN);
