cost prefix = ",";
client.on('messageCreate', message => {
    // Ignora mensagens que não começam com o prefixo ou que são de bots
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Divide a mensagem em comando + argumentos
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Comando de exemplo
    if (command === "ping") {
        message.channel.send("Pong!");
    }

    // Aqui você pode adicionar outros comandos, tipo:
    // if (command === "oi") { message.channel.send("Oi!"); }
});
require("dotenv").config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.login(process.env.TOKEN);