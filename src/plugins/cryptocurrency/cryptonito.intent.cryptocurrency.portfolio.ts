import * as BotBuilder from 'botbuilder';

import { Cryptocurrency } from './cryptocurrency';

// Each function corresponds to a dialog interaction.
export default [
    showPortfolio,
    showDescription
];

function showPortfolio(session: BotBuilder.Session, args: any, next: Function) {
    let cryptocurrencies = new Map();
    cryptocurrencies.set('btc', new Cryptocurrency('btc', 'Bitcoin', 'Digital gold'));
    cryptocurrencies.set('eth', new Cryptocurrency('eth', 'Ethereum', 'Programmable contracts and money'));
    cryptocurrencies.set('bth', new Cryptocurrency('bch', 'Bitcoin Cash', 'Bitcoin clone'));
    const cryptocurrencyNames: string[] = [];

    for (var [key, value] of cryptocurrencies) {
        cryptocurrencyNames.push(value.symbol);
    }

    BotBuilder.Prompts.choice(session, 'Cryptocurrencies', cryptocurrencyNames);
}

function showDescription(session: BotBuilder.Session, args: any, next: Function) {
    // TODO Use dialog data to share information during the entire dialog
    let cryptocurrencies = new Map();
    cryptocurrencies.set('btc', new Cryptocurrency('btc', 'Bitcoin', 'Digital gold'));
    cryptocurrencies.set('eth', new Cryptocurrency('eth', 'Ethereum', 'Programmable contracts and money'));
    cryptocurrencies.set('bth', new Cryptocurrency('bch', 'Bitcoin Cash', 'Bitcoin clone'));
    args = args || {};
    var response = args.response || {};
    var option = response.entity;

    let message: string = cryptocurrencies.get(option).name + ': ' + cryptocurrencies.get(option).description;
    session.endDialog(message);
}
