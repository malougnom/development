
const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '!'
 
 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.sendMessage('Привет я БОТ!');
     }
 });
 client.on('ready', () => {
     console.log('ready')
 })

client.login(process.env.TOKEN)