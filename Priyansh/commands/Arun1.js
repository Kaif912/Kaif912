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
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝐌𝐀𝐃𝐄 𝐁𝐘★\n\n✦𝐕𝐈𝐊𝐀𝐒 𝐑𝐀𝐉𝐏𝐔𝐓✦\n\n★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :\n\n✦ 𝐍❍𝐓 𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 ✦ \n𝐂❍𝐍𝐓𝐀𝐂𝐓 𝐌𝐄 \n ❍𝐍 𝐅𝐀𝐂𝐄𝐁❍❍𝐊 🌐https://www.facebook.com/profile.php?id=100081181726230`",
				attachment: fs.createReadStream(__dirname + `/noprefix/vikas.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }