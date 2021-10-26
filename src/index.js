const cfg = require("./cfg.json");
const { Client, Intents, Collection } = require("discord.js");
const client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION", "USER", "GUILD_MEMBER"], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();

["command", "event"].forEach(handler => {
        require(`./handlers/${handler}`)(client)
});
client.login(cfg.token);