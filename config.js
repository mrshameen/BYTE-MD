
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxWeDlwMXNwa05ucUU1Nm04WFBMWkp0V0QrYUd1ay96UkhjWVNnV2kyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHF2eGFRMFdTcEZrc2IwSDJFK0VUOWdJR0htRWFQY01BaEJHZEI5N1NEOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5R004WmZVWXd5VDJzKzVNRmw2d2NpTVdNcld5UGJEN3dvaFczVUlUZzIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKdmRMOUx5Wndib0s0YmJzTm5mMG00MVdVVndLQ3BuQVNZem5ZaldOaEVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFMYjIzdVhoYmFuUFJza1dDYm9mVUZlemJsWlFNaE1ObGptNUlzcGVCbU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJsdHJBV1duVVFoU01wcVduQ1B1Z0lmU0ZOVDVLTk1QZ2dFbSsrOE9sRnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZWQXlQbSswQ2pWQy94SDNKTkt3djFnL0ZrR2tDUjd1WjBHTlV1amUyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUROWHVaYll6QlNGRjBJU2NsUDA4cHk1R01JSEt3c3ZpTFRKQWd2aW1rZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitlV2tZMEFGSHFjY3hFZ3hZbG1nRjBHQVZsRFF4TWJ4ME9UbnQvT2c5TEtOaHBVTzd4SHZHNmZrWjNyREFYZEh2dnlxS0hyaDhRV0hJT2dQYm5FK2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiLy9SVDhkSVlTR0NoOVhzSVlyNXZhZ05rZlRzZXk1RjhqVWxpOExTTVA5az0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiM3M0cE9mOFhROWlQSVBWN1BuNG5BZyIsInBob25lSWQiOiI3ZjU5ZTBmNS02OWE0LTQ1OTctOTQzYy0wZjA0ZTY5ZjkxYWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnFzWmo0cHlDb1lXK05VU3hOaURzaWljYStFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilhqc2xnT0YyVk1EZlFXd214RlR6QWdLUnVBWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFQUpEN0VEMyIsIm1lIjp7ImlkIjoiOTQ3NTQ0ODcyNjE6NDhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSIPCdkIrwnZCI8J2QjfCdkIYgXG4gICAgIFxuICAgXG5cblxuXG5cblxuXG5cbiAgICAgICAgICBcblxuXG5cblxuXG4gICAgICAgICAgICBcblxuXG5cblxuXG5cblxu8J2QhPCdkITwnZCRIPCdkIvwnZCI8J2QjPCdkIjwnZCTIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOU2JtK1lGRUtqQjdMUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzQUI5N05jajR1MERSTkhLS1BMYjlodDRRRm9TcEdXVU9rSkhnTE9xcndZPSIsImFjY291bnRTaWduYXR1cmUiOiJhaFE1NmZtNFFhcEl5YVk5MnA4b050N1Y0M1g4QkJSdWpIR0ZhU2ZPZDE0U1hnclRQTkpodlk4alpxTmh1NkN5UmIzcG5EK2pKQTBZaytnT1ExZEFEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUGx2WjZQRjVpNkZ0aTRLSG1ZcGtuV2IyTlhYOEtLWmhPaGR4Um9sYWtEaGtSRllkbHF2eHlWUExKcVhNZVcwTjZCQ3VINVJmdk5xS05KcXhXRG9GaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1NDQ4NzI2MTo0OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkd0FmZXpYSStMdEEwVFJ5aWp5Mi9ZYmVFQmFFcVJsbERwQ1I0Q3pxcThHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNDQyNDg1fQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
