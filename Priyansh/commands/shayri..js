const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot3",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "goibot2",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

var tl = ["हमें उनके दर्द का पता है..💛  हमारे दर्द का उन्हें पता नहीं...😆          उन्हें चोट लगी तो रो लिया!😅             हम दिखाते नहीं तो हमें इस एहसास का पता नहीं...😊                          इतने दर्द के बाद भी उन्हें हमारे जज़्बात नज़र नहीं आते...😅                    सच में हमसे प्यार करते हो ना फिर क्यों तुम्हें मेरे दर्द की परवाह नहीं....🙃                          🥀💔विकास सिंह 💔🥀.                            ✍️✍️" , "JAHA JANA HAI JAIYE. ..😄                          APNI JINDGI KISI AUR KE SATH KHUSHUYO ME BITAIYE. ..😊    DARD MAT SAHO HAMRE SATH. .🙃AJAD HO JAO KHUSH RAHO KISI GAIR KE SATH. ...🙂" , "ᴛᴇʀᴀ ɴᴀᴀᴍ ʀᴀᴋʜ ᴅᴜɴɢᴀ ᴍᴇʀᴇ ᴊᴜʙᴀ ᴘᴇ 🍁 , ʜᴀʀ ʟᴀꜰᴊ ᴛᴇʀᴇ ɴᴀᴀᴍ ᴋᴀʀ ᴅᴜɴɢᴀ 🍂.. , ᴀɢᴀʀ ᴋᴇʜ ᴅᴏɢᴇ ᴋɪꜱɪ ꜱᴇ ᴅᴜʀ ʀᴇʜɴᴇ ᴋᴏ ☘️ , ᴜꜱᴇ ꜱᴀʙᴋᴇ ꜱᴀᴍɴᴇ ᴀɴᴊᴀɴ ᴋᴇʜ ᴅᴜɴɢᴀ 🌸.. " , "ᴛᴇʀᴇ ᴅɪʟ ᴋᴏ ᴍᴀɪᴋʜᴀɴᴀ ᴀᴘɴᴀ ʙᴀɴᴀ ʟᴜɴɢᴀ 💙 , ᴛᴜᴊʜᴇ ᴀᴘɴᴇ ᴋʜʜꜱɪʏᴏ ᴋᴀ ᴛʜɪᴋᴀɴᴀ ʙᴀɴᴀ ʟᴜɴɢᴀ ❤️ , ᴛᴜ ᴋᴇʜ ᴅᴇ ᴀɢᴀʀ ᴊᴀᴀɴᴇ ᴋᴏ ᴍᴜᴊʜᴇ 😀 , ᴛᴜᴊʜꜱᴇ ᴅᴜʀ ʀᴇʜᴋᴀʀ ᴛᴜᴊʜᴇ ᴀᴘɴᴀ ʙᴀɴᴀ ʟᴜɴɢᴀ 🌐.. " , "ᴍᴀʜᴀᴅᴇᴠ ꜱᴇ ᴛᴇʀɪ ᴋʜᴜꜱɪʏᴀ ᴍᴀɴɢᴜɴɢᴀ 😊 , ᴛᴇʀᴇ ʜᴀʀ ᴅᴀʀᴅ ᴋᴏ ᴀᴘɴᴀ ᴍᴀɴᴜɴɢᴀ 🤗 , ᴀɢᴀʀ ʀᴜʟᴀʏᴇɢᴀ ᴜᴘᴀʀ ᴡᴀʟᴀ ʙʜɪ ᴛᴜᴊʜᴇ 😞 , ᴛᴏ ᴜꜱᴇ ʙʜɪ ᴀᴘɴᴀ ᴅᴜꜱʜᴍᴀɴ ᴍᴀɴᴜɴɢᴀ 💙" , "ᴀᴊᴍᴀᴏ ɴᴀ ᴍᴇʀᴇ ᴅɪʟ ᴋᴏ 🕊️ , ᴛᴀᴅᴘᴀᴏ ɴᴀ ᴍᴇʀᴇ ᴅɪʟ ᴋᴏ 😄 , ᴅᴇ ᴅᴇ ꜱᴜᴋᴏᴏɴ ᴇ ᴍᴏʜʙʙᴀᴛ 🖤 , ɪᴛɴᴀ ʀᴜʟᴀᴏ ɴᴀ ᴍᴇʀᴇ ᴅɪʟ ᴋᴏ 😊 " , " ♥️●𒁍⃝𝐌Əɽı   𝐅ıʈɽaʈ «⸙»𒁍⃝♥️●𒁍⃝ɱɚ.  𝐍ɑɧıı ┣┫ɑıı ________________________________________   «  𝐔ŋ » 𝐏aɽıŋd❍                  ♥️●𒁍⃝ 𝐒ə    𝐃❍𝐒ʈı   𝐑aƙɧŋa  ⸙  ________________________________________             𝐉ı𝐒Ə  ┣┫ɑɽ «   𝐊ısı »  ƙə » 𝐒atH 𝐔dŋə «     ƙa «   𝐒h❍k         ┣┫❍    (💥💯)                   🥀 ♥️●𒁍⃝      __________________________________________               ❤😘 [[•🌸-______-x♥__________________________________________________________" , "𝐃𝐔𝐒𝐑𝐎 𝐏𝐄 𝐌𝐀𝐑𝐍𝐄 𝐖𝐀𝐋𝐄 𝐇𝐀𝐌 𝐍𝐇𝐈 ......🩵😁                       𝐇𝐔𝐌 𝐏𝐄 𝐌𝐀𝐑𝐍𝐄 𝐖𝐀𝐋𝐄 ....😌      𝐊𝐀𝐌 𝐍𝐇𝐈 .....🌿🤤😻" , "🥲┼┼──🦋 𝐊ɪɴ 𝐋ᴀғᴢᴏɴ 𝐌ᴇ 𝐁ʏᴀɴ 𝐊ᴀʀᴜ      🥲┼┼──🍁                         𝐀ʜᴇᴍɪʏᴀᴛ 𝐓ᴇʀɪ  🥲┼┼──🦋°          𝐊ɪ 𝐁ɪɴ 𝐓ᴇʀᴇ 𝐍ᴀᴍᴜᴍᴋɪɴ 𝐒ɪ 𝐋ᴀɢᴛɪ 𝐇ᴀ𝐢•||•●┼ᚐ🩵 ꯭←̟̽ __  ꯭←̟̽🩷💋┼──                                🥲┼┼──°   𝐙ɪɴᴅᴀɢɪ 𝐌ᴇʀɪ" , "आप को पाने के लिए जिद्दी नहीं हैं, लेकिन हारने से आपको डरना चाहिए.......♡।...................♡ ❣️🥀🍂कभी दूर मत जाना और आपका हर फैसला मंजूर है। "]
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"

  if (event.body.indexOf("shayri") == 0 || (event.body.indexOf("Shayri") == 0)) {
    var msg = {
      body: `𝐇𝐄𝐋𝐋❍ 🎵${name}🔊,  \n\n𝐓𝐇𝐈𝐒 𝐒𝐇𝐀𝐘𝐑𝐈 𝐅❍𝐑 𝐘❍𝐔💞 »»\n『\n   ${rand}  』\n\n𝐖𝐑𝐈𝐓𝐄 𝐁𝐘»» ◎ 𝐕𝐈𝐊𝐀𝐒 𝐑𝐀ᒍ𝐏𝐔𝐓 ◎`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }