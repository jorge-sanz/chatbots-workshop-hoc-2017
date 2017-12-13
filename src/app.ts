import * as dotenv from 'dotenv';
import * as path from 'path';
import * as restify from 'restify';
import * as BotBuilder from 'botbuilder';
import greeting from './plugins/greeting/index';

// Load configuration in process.env from the .env file
dotenv.config();

// Start server
let server = restify.createServer();
server.listen(process.env.PORT || 3978, () => {
    console.log('%s listening to %s', server.name, server.url);
});

// Bot connector
let connector = new BotBuilder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
server.post('/api/messages', connector.listen());

let bot = new BotBuilder.UniversalBot(connector, (session: BotBuilder.Session) => {
    session.endDialog('Sorry, I didn\'t get you...');
});

// LUIS model setup
const model = process.env.LUIS_MODEL_URL;
bot.recognizer(new BotBuilder.LuisRecognizer(model));

// Libraries initialization
bot.library(greeting);
