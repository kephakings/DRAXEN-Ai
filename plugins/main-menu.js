const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    alias: ["allmenu","fullmenu"],use: '.menu2',
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃★╭──────────────®
┃★│ Owner : *${config.OWNER_NAME}*
┃★│ Baileys : *Multi Device*
┃★│ Type : *NodeJs*
┃★│ Platform : *Heroku*
┃★│ Mode : *[${config.MODE}]*
┃★│ Prifix : *[${config.PREFIX}]*
┃★│ Version : *3.0.0 Bᴇᴛᴀ*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷®
╭━━〔 *🎧DOWNLOAD Menu🎧* 〕━━┈⊷®
┃◈╭─────────────·๏
┃◈┃• facebook
┃◈┃• mediafire
┃◈┃• tiktok
┃◈┃• twitter
┃◈┃• Insta
┃◈┃• apk
┃◈┃• img
┃◈┃• tt2
┃◈┃• pins
┃◈┃• apk2
┃◈┃• fb2
┃◈┃• pinterest 
┃◈┃• spotify
┃◈┃• play
┃◈┃• play2
┃◈┃• play3
┃◈┃• play4
┃◈┃• play5
┃◈┃• play6
┃◈┃• play7
┃◈┃• play8
┃◈┃• play9
┃◈┃• play10
┃◈┃• audio
┃◈┃• video
┃◈┃• video2
┃◈┃• video3
┃◈┃• video4
┃◈┃• video5
┃◈┃• video6
┃◈┃• video7
┃◈┃• video8
┃◈┃• video9
┃◈┃• video10
┃◈┃• ytmp3
┃◈┃• ytmp4
┃◈┃• song
┃◈┃• darama
┃◈┃• gdrive
┃◈┃• ssweb
┃◈┃• tiks
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 👥GROUP MENU👥 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• grouplink
┃◈┃• kickall
┃◈┃• kickall2
┃◈┃• kickall3
┃◈┃• add
┃◈┃• remove
┃◈┃• kick
┃◈┃• promote 
┃◈┃• demote
┃◈┃• dismiss 
┃◈┃• revoke
┃◈┃• setgoodbye
┃◈┃• setwelcome
┃◈┃• delete 
┃◈┃• getpic
┃◈┃• ginfo
┃◈┃• delete 
┃◈┃• disappear on
┃◈┃• disappear off
┃◈┃• disappear 7D,24H
┃◈┃• allreq
┃◈┃• updategname
┃◈┃• updategdesc
┃◈┃• joinrequests
┃◈┃• senddm
┃◈┃• nikal
┃◈┃• mute
┃◈┃• unmute
┃◈┃• lockgc
┃◈┃• unlockgc
┃◈┃• invite
┃◈┃• tag
┃◈┃• hidetag
┃◈┃• tagall
┃◈┃• tagadmins
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 😞REACTIOS MENU😞 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• bully @tag
┃◈┃• cuddle @tag
┃◈┃• cry @tag
┃◈┃• hug @tag
┃◈┃• awoo @tag
┃◈┃• kiss @tag
┃◈┃• lick @tag
┃◈┃• pat @tag
┃◈┃• smug @tag
┃◈┃• bonk @tag
┃◈┃• yeet @tag
┃◈┃• blush @tag
┃◈┃• smile @tag
┃◈┃• wave @tag
┃◈┃• highfive @tag
┃◈┃• handhold @tag
┃◈┃• nom @tag
┃◈┃• bite @tag
┃◈┃• glomp @tag
┃◈┃• slap @tag
┃◈┃• kill @tag
┃◈┃• happy @tag
┃◈┃• wink @tag
┃◈┃• poke @tag
┃◈┃• dance @tag
┃◈┃• cringe @tag
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 🥊OWNER MENU🥊 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• vv
┃◈┃• allmenu
┃◈┃• repo
┃◈┃• block
┃◈┃• unblock
┃◈┃• fullpp
┃◈┃• setpp
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• updatecmd
┃◈┃• alive
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 🧧FUN MENU🧧 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• shapar
┃◈┃• rate
┃◈┃• insult
┃◈┃• hack
┃◈┃• ship
┃◈┃• character
┃◈┃• pickup 
┃◈┃• joke
┃◈┃• hrt
┃◈┃• hpy
┃◈┃• syd
┃◈┃• anger
┃◈┃• shy
┃◈┃• kiss
┃◈┃• mon
┃◈┃• cunfuzed
┃◈┃• setpp
┃◈┃• hand
┃◈┃• nikal
┃◈┃• hold
┃◈┃• hug
┃◈┃• nikal
┃◈┃• hifi
┃◈┃• poke
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 📌CONVERT MENU📌 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• sticker
┃◈┃• sticker2
┃◈┃• emojimix
┃◈┃• fancy
┃◈┃• take
┃◈┃• tomp3
┃◈┃• tts
┃◈┃• trt
┃◈┃• base64
┃◈┃• unbase64
┃◈┃• binary
┃◈┃• dbinary
┃◈┃• tinyurl
┃◈┃• urldecode
┃◈┃• urlencode
┃◈┃• url
┃◈┃• repeat 
┃◈┃• ask
┃◈┃• readmore
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 🪀AI MENU🪀 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ai
┃◈┃• gpt3
┃◈┃• gpt2
┃◈┃• gptmini
┃◈┃• gpt
┃◈┃• meta
┃◈┃• blackbox
┃◈┃• luma
┃◈┃• dj 
┃◈┃• draxen
┃◈┃• ai
┃◈┃• gpt4
┃◈┃• bing
┃◈┃• imagine 
┃◈┃• imagine2
┃◈┃• copilot
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 🚀MAIN MENU🚀 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• ping2
┃◈┃• speed
┃◈┃• live 
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 🧸ANIME MENU🧸 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• fack
┃◈┃• truth
┃◈┃• dare
┃◈┃• dog
┃◈┃• awoo
┃◈┃• garl
┃◈┃• waifu
┃◈┃• neko
┃◈┃• megnumin
┃◈┃• neko
┃◈┃• maid
┃◈┃• loli
┃◈┃• animegirl
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈┃• anime1
┃◈┃• anime1
┃◈┃• anime2
┃◈┃• anime3
┃◈┃• anime4
┃◈┃• anime5
┃◈┃• animenews
┃◈┃• foxgirl
┃◈┃• naruto
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 📜OTHER MENU📜 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• timenow
┃◈┃• date
┃◈┃• count
┃◈┃• calculate
┃◈┃• countx
┃◈┃• flip
┃◈┃• coinflip
┃◈┃• rcolor
┃◈┃• roll
┃◈┃• fact
┃◈┃• cpp
┃◈┃• rw
┃◈┃• pair
┃◈┃• pair2
┃◈┃• pair3
┃◈┃• fancy
┃◈┃• logo <text>
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• yts
┃◈┃• ytv
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/tmmvub.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029Vb4vbKF6xCSMEFopxc10@newsletter',
                        newsletterName: 'DRAXEN-Ai',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/c5wfno.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
