const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
client.on('message', message => { // Leaked by [ @M3a4x ]
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله : ${args}`)
.setDescription(`**برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`California Shop`,"http://twitch.tv/Cypher Bot")
client.user.setStatus("dnd")
});

     client.on('message', message => {
                  if(!message.channel.guild) return;
        var prefix = "!";
        if(message.content.startsWith(prefix + 'obc')) {
        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
        let copy = "Calfonira";
        let request = `Requested By ${message.author.username}`;
        if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
        msg.react('✅')
        .then(() => msg.react('❌'))
        .then(() =>msg.react('✅'))
         
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
         
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
         
        reaction1.on("collect", r => {
        message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
        message.guild.members.forEach(m => {
        var bc = new
           Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle('Broadcast')
           .addField('Server', message.guild.name)
           .addField('Sender', message.author.username)
           .addField('Message', args)
           .setThumbnail(message.author.avatarURL)
           .setFooter(copy, client.user.avatarURL);
        m.send({ embed: bc })
        msg.delete();
        })
        })
        reaction2.on("collect", r => {
        message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
        msg.delete();
        })
        })
        }
        });

     client.on('message' , message => {
          var prefix = "!";
          if(message.author.bot) return;
         
          if(message.content.startsWith(prefix + "rolebc")) {
            if (!message.member.hasPermission("ADMINISTRATOR"))  return;
            let args = message.content.split(" ").slice(1);
         
            if(!args[0]) {
              message.channel.send("قم بمنشنة الرتبة | !rolebc @everyone message")
                return;
            }
            if(!args[1]) {
              message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
                return;
            }
         
              if(args[0] == "@everyone") {
                message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`)
                message.guild.members.forEach(m => {
                  m.send(
                  "**" + "السيرفر :" + "\n" +
                  `${message.guild.name}` + "\n" +
                  "المرسل :" + "\n" +
                  `${message.author.tag}` + "\n" +
                  "الرسالة :" + "\n" +
                  `${args[1]}` + "**"
                  )
                })
                return;
              }
         
                  var role = message.mentions.roles.first();
                    if(!role) {
                      message.reply("لا توجد رتبة بهذا الاسم")
                        return;
                    }
                message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
                  n.send(
                  "**" + "السيرفر :" + "\n" +
                  `${message.guild.name}` + "\n" +
                  "المرسل :" + "\n" +
                  `${message.author.tag}` + "\n" +
                  "الرسالة :" + "\n" +
                  `${args[1]}` + "**"
                  )
                })
                message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
            }
        });

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
