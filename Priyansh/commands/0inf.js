module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Arun Kumar", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://imgur.com/a/CqV4vSC", "https://i.postimg.cc/Dzz4XgKD/Picsart-24-06-15-08-41-31-366.jpg", "https://imgur.com/a/OY2mzQJ.jpg", "https://imgur.com/a/hTExq6O.jpg"];
var callback = () => api.sendMessage({body:`🌹𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 🇮🇳 


☄️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥𝗢𝗪𝗡𝗘𝗥 🔥☞︎︎︎✦𝐕𝐈𝐊𝐀𝐒 𝐑𝐀𝐉𝐏𝐔𝐓✦☜︎︎︎✰ \n\n
🙈🄾🅆🄽🄴🅁 🄲🄾🄽🅃🄰🄲🅃 🄻🄸🄽🄺🅂🙈➪ \n\n  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 🧨https://www.facebook.com/profile.php?id=100081181726230 💞🕊️
  \n 
✅𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘👉 _rajput___editx \n\n  ====𝗧𝗼 𝗹𝗲𝗮𝗿𝗻 𝗛𝗼𝘄 𝘁𝗼 𝗖𝗿𝗲𝗮𝘁𝗲 𝗔 𝗯𝗼𝘁 === 𝐂❍𝐍𝐓𝐀𝐂𝐓 𝐌𝐄 ❍𝐍 𝐅𝐀𝐂𝐄𝐁❍❍𝐊 🌐 🗡 ★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :✦ 𝐍❍𝐓 𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 ✦ 
✧══════•❁❀❁•══════✧

🌸𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using My Bot ❤ ${global.config.BOTNAME} 🖤

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close",() => callback());
   };
