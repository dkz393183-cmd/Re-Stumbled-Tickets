const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel, Partials.Message],
});

client.commands = new Collection();
client.slashCommands = new Collection();

// Load handlers
const handlersPath = path.join(__dirname, 'handlers');
fs.readdirSync(handlersPath).forEach(file => {
  require(`./handlers/${file}`)(client);
});

client.login(require('./config.json').token);
