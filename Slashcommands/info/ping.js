const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'ping',
  description: 'pong',
  
  run: async( interaction, client, args) => {

    await interaction.deferReply({})
  
     let embed = new MessageEmbed().setTitle("pong")

interaction.followUp({ embeds: [embed] })
  }
}
