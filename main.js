const discord = require("discord.js");
const client = new discord.Client({disableEveryone: true});

client.on(`ready`, () => {
  console.log(`${client.user.username} został pomyślnie uruchomiony!`);
});

client.on(`message`, message => {
  if(message.content === `#test`) {
    message.reply(`wykonano pomyślnie!`);
  }
});

client.login(process.env.TOKEN);
