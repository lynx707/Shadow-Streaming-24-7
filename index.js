const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Dhaka', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1079010612769722508')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/spinninrecords') //Must be a youtube video link 
    .setState('ᴀᴛ ᴛʜᴇ ᴇɴᴅ ᴏғ ᴛʜᴇ ᴍᴀɴɢᴀ, ɪ ᴀᴍ ᴜɴᴅᴏᴜʙᴛᴇᴅʟʏ ᴛʜᴇ sᴛʀᴏɴɢᴇsᴛ ᴍᴏɴᴀʀᴄʜ ᴀɴᴅ ʜᴜɴᴛᴇʀ.')
    .setName('Discord Community')
    .setDetails(`THE NAME IT SHOWS YOUR STREAMING [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/978626140782624798/1203648439485730826/df33lic-d25ed539-af4c-4b7c-bbb9-415e8d09f057.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝕾𝖚𝖓𝖌 𝕵𝖎𝖓-𝖜𝖔𝖔') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/869609600842858526/1203652745836634123/flame_.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('𝕻𝖚𝖗𝖕𝖑𝖊 𝕱𝖑𝖆𝖒𝖊') //Text when you hover the Small image
    .addButton('Discord Server', 'https://discord.gg/bXDnGvWu8E')
    .addButton('Instagram', 'https://instagram.com/patkhet.lol');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `⟢ sᴏʟᴏ ʟᴇᴠᴇʟɪɴɢ ⟢`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
