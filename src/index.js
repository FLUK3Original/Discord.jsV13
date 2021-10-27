const cfg = require("./cfg.json");
const { Client, Intents, Collection } = require("discord.js");
const client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"], 
intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, 
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const prefix = cfg.prefix;

client.commands = new Collection();
client.aliases = new Collection();
client.event = new Collection();
client.cooldowns = new Collection();

["command", "event"].forEach(handler => {
        require(`./handlers/${handler}`)(bot)
});

client.login(cfg.token);
