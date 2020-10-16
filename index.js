const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', message => {
  console.log('I am ready');
});

client.on('message',message => {
          if(message.content === 'au!ping') {
            message.channel.send('Hi, You pinged me?')
          } else if(message.isMemberMentioned(client.user)) {
                    message.channel.send('How can i help you, btw my prefix is +')
                    }
});

client.on('message', message => {
  if(message.content === 'au!botinfo') {
    let embed = new discord.RichEmbed()
    .setTitle("BOT INFORMATION") //set title of embed
.setColor("#ff2052") //color of embed
    .setDescription("This bot is made by PRITu playZ, so nothing") //description of embed
    .addField("LIBRARY", "JavaScript")
    .setThumbnail(`${message.author.avatarURL}`)
    .setFooter(`Command req by ${message.author.username}`, `${message.author.avatarURL}`);
message.channel.send(embed);
  }
});

client.login('NzYxNTc0NzI0ODMyNTkxODg1.X3cluw.qFWT3Yk7I4Wzj6qC873P2bEByMM');
