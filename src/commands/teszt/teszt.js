const Discord = require(`discord.js`);

module.exports = {
    name: "teszt",
    aliases: ["test"],
    categories: "Teszt",
    permissions: "",
    description: "Teszt parancs",
    cooldown: 5,
    usage: "",
    run: async(bot, message, args) => {
        message.channel.send({content: "Üdv! Ez egy teszt parancs!"})
    }
}
