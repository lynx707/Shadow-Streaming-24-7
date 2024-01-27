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
    .setState('Patkhet')
    .setName('Discord Community')
    .setDetails(`THE NAME IT SHOWS YOUR STREAMING [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/869609600842858526/1200857586392641658/lucifer.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝕷𝖚𝖈𝖎𝖋𝖊𝖗') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/964235721630154812/1135216057339097159/verify.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Verify') //Text when you hover the Small image
    .addButton('Discord Server', 'https://discord.gg/bXDnGvWu8E')
    .addButton('Facebook Page', 'https://facebook.com/patkhet.lol');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `◟́◞̀ ⟢ 𝕷ucifer ! ♡`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
