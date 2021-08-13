const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const IQDESC = "Yanıtladığınız kişinin iq testini ölçer.";

Asena.addCommand({pattern: 'motivasyon', fromMe: true, desc: IQDESC }, (async (message, match) => {

    if (message.reply_message === false) return await message.sendMessage('```Lütfen bir mesaja yanıt verin!```');

    await message.client.sendMessage(message.jid, '' + '@' + message.reply_message.jid.split('@')[0] + ' ```Adlı kişiye motivasyon veriliyor... 😍```', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

    });

    await new Promise(r => setTimeout(r, 2100));
  
    await message.sendMessage(`• şekil : √`);
    
    await message.sendMessage(`• kalite : √`);
    
    await message.sendMessage(`• estetik : √`);
    
    await message.sendMessage(`• uyum : √`);
    
    await message.sendMessage(`zeka oranı...`);
    
    await message.sendMessage(`██████████████ 100%`);
    
    await message.sendMessage(`karizma oranı...`);
    
    await message.sendMessage(`██████████████ 100%`);
    
    await message.sendMessage(`toplam sonuç...`);
    
    await message.sendMessage(`[■■■■■■■■■■] 100%`);    
    
}));