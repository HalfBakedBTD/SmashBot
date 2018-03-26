const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const button_cooldown_time = 30;
const button_talked_users = new Set();

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
	bot.channels.filter(c => c.name === 'casinogirl-status').forEach(channel => channel.send(`${bot.user.username} has just restarted.`));
});

bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  member.send(`:wave: Thanks for joining **InvitesForCash**!\n\n:moneybag: Invite 80 people for your first 5$!\n:shopping_cart: Make sure to check out <#426553006096515073> for newest items!\n\n:purple_heart: Follow on Twitch: https://www.twitch.tv/sirhalfbaked\n:red_circle: Subscribe on YouTube: https://www.youtube.com/c/HalfBakedGaming15`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (message.content.startsWith('&dmsend all')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, you don't have permissions to use this!");
	  const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(`Sending users message:\n\t${sayMessage}`);
    message.guild.members.forEach(member => member.send(`${sayMessage}`));
  }
});


bot.login(process.env.BOT_TOKEN);
