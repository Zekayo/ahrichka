const Discord = require('discord.js')
const fs = require('fs') // подключаем fs к файлу
const bot = new Discord.Client({disableEveryone: true});
const config = require ('./config.json')
const fetch = require('node-fetch')
bot.commands = new Discord.Collection() // создаём коллекцию для команд
const randomPuppy = require ("random-puppy");
const disbut = require("discord-buttons");

const prefix = config.prefix;


function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
  

bot.login(config.token)
bot.on('message', async message => {
	let wordArray = message.content.split(" ")
	console.log(wordArray);

	let filterWords = ['соулс','соульсный','souls','соулсов','соулсы','солс','sоuls','Соулс','Souls','соул','души','дарксоус','соус','оул','Sоuls','oul','душі']
	for(var i = 0; i < filterWords.length; i++) {
		if(message.content.toLowerCase().includes(filterWords[i].toLowerCase())&&message.member.roles.cache.has('645627349207089172')){
            message.delete()
            //      message.channel.send('Вы замучены на 9999 лет. <:batya_I_vishnevii_sok_KB:804019024086302781>')
			break;
		}

	}
});
bot.on("ready", async () => {
    console.log(`${bot.user.username} activated. I am in ${bot.guilds.size} guilds! Ya happy?`);
  });

fs.readdir('./commands', (err, files) => { // чтение файлов в папке commands
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js') // файлы не имеющие расширение .js игнорируются
    if (jsfile.length <= 0) return console.log('Команды не найдены!') // если нет ни одного файла с расширением .js

    console.log(`Загружено ${jsfile.length} команд`)
    jsfile.forEach((f, i) => { // добавляем каждый файл в коллекцию команд
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props)
    })
})

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    let messageArray = message.content.split(' ') // разделение пробелами
    let command = messageArray[0] // команда после префикса
    let args = messageArray.slice(1) // аргументы после команды

    let command_file = bot.commands.get(command.slice(prefix.length)) // получение команды из коллекции
    if (command_file) command_file.run(bot, message, args)
})

bot.on('guildMemberRemove', member => {
    let chanel1 = member.guild.channels.cache.get('875674716696899625');
  //  chanel1.send(`booba`)
  //  if (!channel1) return;
    let hembed1 = new Discord.MessageEmbed()
      .setColor(`#d83a2c`)
      .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
      .setTitle('<a:leave:854018449083990076> **Паспортный контроль.**')
      .setDescription(`**· ${member.user.tag}** покинул(а) границы ZOII.`)
      .setThumbnail(member.user.displayAvatarURL())
//      .setFooter("ᅠKaspersky Lab. ©2077. Все права не защищены",'https://images-ext-1.discordapp.net/external/P6QpGuJccEusLi69MYwbGaszu68ZGqqSQXA9na0qksM/https/cdn.discordapp.com/icons/522667968572686347/309a816d80959b99d29bed1aee9f955f.png');
    chanel1.send(hembed1);

  });

  bot.on('guildMemberAdd', member => {

    let chanel1 = member.guild.channels.cache.get('875674716696899625');
    if (!chanel1) return;
    let hembed = new Discord.MessageEmbed()
      .setColor(`#90ee90`)
      .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
      .setTitle(`<a:join:854018473088909342> **Паспортный контроль.**`)
      .setDescription(`**· ${member.user.tag}**, прибыл(а) в ZOII.`)
      .setThumbnail(member.user.displayAvatarURL())
//      .setFooter("ᅠKaspersky Lab. ©2077. Все права не защищены",'https://images-ext-1.discordapp.net/external/P6QpGuJccEusLi69MYwbGaszu68ZGqqSQXA9na0qksM/https/cdn.discordapp.com/icons/522667968572686347/309a816d80959b99d29bed1aee9f955f.png');
    chanel1.send(hembed);
  });