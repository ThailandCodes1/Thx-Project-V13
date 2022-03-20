
 const db = require("quick.db")
   const ms = require('ms')
const Discord = require("discord.js")
module.exports = {
  name:"thx",
  description:"Thx the support",
  cooldown: 3600000,
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


  
  if (user.user.id === interaction.member.id) return interaction.editReply({content:"Nice Try ."});




    
  
    
        
        
        var points = await db.fetch(`Thxs_Data_bbes_${interaction.guild.id}_${user.user.id}`);
        if (points == null) {
            points = db.set(`Thxs_Data_bbes_${interaction.guild.id}_${user.user.id}`, {
                points: 1
            })
            interaction.editReply({embeds:[
                new Discord.MessageEmbed()
                .setAuthor(`✅ Done thx ${user.user.tag} `)
                .setColor("#2F3136")
                                  ]})
            
        
        } else {
            db.add(`Thxs_Data_bbes_${interaction.guild.id}_${user.user.id}.points`, 1)
            interaction.editReply({embeds:[
                new Discord.MessageEmbed()
                .setAuthor(`✅ Done thx ${user.user.tag} `)
                .setColor("#2F3136")
                                  ]})
        }
            
        }
    }
