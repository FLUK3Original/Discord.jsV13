const Discord = require("discord.js")
module.exports = async (client, message) => {
    const cfg = require("../../cfg.json")
    logic(cfg.prefix, message, client)
    
}

function logic(prefix, message, client) {
    
    if(!message.guild) return;
    if(message.author.bot) return;
    
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = message.guild.fetchMember(message)
    
    const args = message.content.slice(prefix.length).trim(.split(/ +/g))
    const cmd = args.shift().toLowerCase();
    
    if(cmd.length === 0) return;
    
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd))
    
    if(command) {
        console.log("van")
        
    } else {
        return;
    }
    const permission = message.member.permissions.has(command.permission, true);
    
    if(!permission || permission === undefined) {
        return message.reply(`Nincs meg a parancs használatához a szükséges jogod: **${command.permission}**!`)
    }
    const { cooldowns } = client;
    if(!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
       const currentTime = Date.now()
      const timeStamps = cooldowns.get(command.name)
      const cooldownAmmount = (command.cooldown) * 1000;
        
        if(timeStamps.has(message.author.id)) {
            const expirationTime = timeStamps.get(message.author.id) + cooldownAmmount;
            
           if(currentTime < expirationTime) {
               const timeLeft = (expirationTime - currentTime) / 1000;
               return message.reply(`Várnod kell ${timeLeft.toFixed(1)} másodpercet még, a parancs használatához.`)
           }
        }
        timeStamps.set(message.author.id, currentTime)
        setTimeout (() => timeStamps.delete(message.author.id), cooldownAmmount);
        
        if(command) {
            command.run(client, message, args)
        }
    

}