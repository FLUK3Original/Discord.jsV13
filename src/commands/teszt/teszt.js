const discord = require("discord.js")

module.exports = {
 name: "teszt",
 categories: "teszt",
 description: "video",
 cooldown: "5",
 usage: "hasznals",
 run: async (client, message, args) => {
     let ping = new discord.MessageEmbed()
     .setTitle("Szia")
     .setDescription("PONG!! (XD)")
     message.channel.send({embeds: [ping]})
 }

}