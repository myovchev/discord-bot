const Discord = require('discord.js');
const client = new Discord.Client();
const tz = require('./timezone').default;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === ';ping') {
    msg.reply('pong');
  }
});


const timezones = [
  'America/Chicago',
  'America/Toronto',
  'Europe/London',
  'Europe/Sofia',
];
client.on('message', msg => {
  if (msg.content.startsWith(';date')) {
    const input = msg.content.split(' ');
    input.shift();
    const date = input.join(' ');
    const results = timezones.map(t => tz(date, t));
    msg.reply({
      embed: {
        // title: `[debug] ${date}`,
        fields: [{
          name: 'Date convert',
          value: results.join("\n"),
        }],
      }
    });
  }
});

const token = process.env.DISCORD_TOKEN;

client.login(token);