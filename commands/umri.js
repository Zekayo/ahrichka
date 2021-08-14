const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.members.first()
      if(!user){ 
      message.channel.send('пошёл нахуй') 
      return;
      }
      message.delete();
      message.channel.send("Умри "+user.toString());

};
module.exports.help = {
    name: "u"
};
