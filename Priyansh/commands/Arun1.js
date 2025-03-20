 const fs = require("fs");
module.exports.config = {
	name: "suraj",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Vikas") || 
react.includes("VIKAS")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝐌𝐀𝐃𝐄 𝐁𝐘★\n\n✦𝐌𝐑 𝐇𝐄𝐑𝐎✦\n\n★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :\n\n✦ https://www.facebook.com/share/1A9NFouGA1/ ✦ \n𝐂❍𝐍𝐓𝐀𝐂𝐓 𝐌𝐄 \n ❍𝐍 𝐅𝐀𝐂𝐄𝐁❍❍𝐊 🌐https://www.facebook.com/profile.php?id=100081181726230`",
				attachment: fs.createReadStream(__dirname + `/noprefix/hero.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
