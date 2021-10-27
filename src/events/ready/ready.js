module.exports = async (bot) => {
    console.log(`${bot.user.username} elindult!`)
    bot.user.setStatus("online");
    bot.user.setActivity(`Counter-Strike: Global Offensive`, {type: "PLAYING"})   
}
