// Code here for main bot
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

// This is to keep your bot online 24/7
const express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send({ data: "pong!" });
});

const listnere = app.listen(process.env.PORT, function() {
  console.log("API Started! Port: " + process.env.PORT);
});
client.login(process.env.TOKEN)
