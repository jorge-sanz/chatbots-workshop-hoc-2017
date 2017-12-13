import * as BotBuilder from 'botbuilder';

import portfolio from './cryptonito.intent.cryptocurrency.portfolio';
// import check from './cryptonito.intent.cryptocurrency.check';

/**
 * A plugin exports a Library whose dialogs are the LUIS intents the plugin can understand
 */

// Create plugin, the id must be unique in your bot.
let plugin = new BotBuilder.Library('cryptocurrency');

/**
 * Add dialogs that this library can manage.
 */

// Value of "matches" attribute corresponds to the assigned name of this intent on LUIS.
plugin.dialog('portfolio', portfolio).triggerAction({
    matches: 'portfolio'
});

/* plugin.dialog('check', check).triggerAction({
    matches: 'check'
}); */

export default plugin;
