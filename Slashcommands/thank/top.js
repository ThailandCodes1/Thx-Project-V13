const db = require("quick.db")
   const ms = require('ms')
const Discord = require("discord.js")
module.exports = {
  name:"top",
  description:"leaderboard",
  cooldown: 10000,



run : async(interaction, client, args) => {
    await interaction.deferReply({})
const usersData = []
        interaction.guild.members.cache.forEach(user => {
            usersData.push(user)
        })
        var pointsContent = usersData.length;
        let usersContent = 0;
        let usersMaxContent = 21;
        let tempData = [];
        for (let i = 0; i < pointsContent; i++) {
            var database = db.fetch(`Thxs_Data_bbes_${interaction.guild.id}_${usersData[i].id}`)
            if (database == null) continue;
 
            tempData.push({
                name: usersData[i].user.id,
                data: database
            });
        }
        const leaderboardData = []
        tempData.sort((a, b) => b.data - a.data);
        for (let k = 0; k < tempData.length; k++) {
            usersContent++
            if (usersContent >= usersMaxContent) continue;
            leaderboardData.push(`\`${k + 1}#\` <@!${tempData[k].name}>, Have: **${tempData[k].data.points} thxs**`)
        }
        var topValue = leaderboardData.join('\n')
        interaction.editReply({embeds:[
            new Discord.MessageEmbed()
            .setAuthor(interaction.guild.name + ` - top thanks! `, interaction.guild.iconURL({ dynamic: true }))
            .setColor("#2F3136")
            .setDescription(topValue)
        ]})
}
}
