const { readdirSync } = require("fs");

module.exports = (client) => {
    const eventsDirs = readdirSync("./events")
    
    eventsDirs.forEach(eventDir => {
        const eventsFiles = readdirSync(`./events/${eventDir}`).filter(f => f.endsWith(".js"))
    
        eventsFiles.forEach(file => {
            const event = require(`../events/${eventDir}/${file}`)
            const eventname = file.split(".")[0].trim();
            
            client.on(eventname, event.bind(null, client))
        })
        
        })
}