const ascii = require("ascii-tabe");
const { readdirSync } = require("fs");

let table = new ascii("Parancsok")
table.setHandling(`Parancs`, `Állapot`);

module.exports = (client) => {
    readdirSync("/commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}`).filter(file => file.endsWith(".js"));
        
        for (let file of commands) {
            let parancs = require(`../commands/${dir}/${file}`);
            
            if(parancs.name) {
                client.commands.set(parancs.name, parancs)
                table.addRow(file, "Működő")
            } else {
                table.addRow(file, "Hibás")
            }
            if(parancs.aliases && Array.isArray(parancs.aliases)) parancs.aliases.forEach(alias => client.aliases.set(alias, parancs.name))
            
        };
    });
    console.log(table.toString())
}