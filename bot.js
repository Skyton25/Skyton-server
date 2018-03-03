const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('guildMemberAdd', guild =>{
const canal = member.guild.channels.find('name', 'member-log');
if (!canal) return;
member.send("Mensagem de boas-vindas");
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
