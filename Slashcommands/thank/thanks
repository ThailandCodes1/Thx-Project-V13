const db = require("quick.db")
const Discord = require("discord.js")

module.exports = {  
  name:"thanks",
  description:"get the thanks",
  cooldown:10000,
  options:[
    {
      name:"user",
      description:"the user",
      type:"USER",
      required:true,
    },
  ],
  
  run : async(interaction, client, args) => {
await interaction.deferReply({})
    let user = interaction.options.getMember("user")

    const points = db.get(`Thxs_Data_bbes_${interaction.guild.id}_${user.user.id}.points`)
        interaction.editReply({embeds:[
            new Discord.MessageEmbed()
            .setColor("YELLOW")
            .setDescription(
                `✅ **${user.user.tag}** Have **${points} thxs** !`)
         ]})
  }
}
