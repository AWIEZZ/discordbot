const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Invite Bot And Support Server`)
    .setDescription(`<:link:845315257430048788>  [Invite](https://discord.com/api/oauth2/authorize?client_id=912264194169118821&permissions=4402341478318&scope=bot) OR [Support Server ](https://discord.gg/DMwYAEDXts)`)
    .setColor("RANDOM")
    .setFooter(`Copyright ©️ Ikaru Skinari`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}