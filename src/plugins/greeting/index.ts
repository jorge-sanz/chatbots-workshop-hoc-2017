import * as BotBuilder from 'botbuilder';

import greeting from './cryptonito.intent.greeting.greeting';
import goodbye from './cryptonito.intent.greeting.goodbye';

/**
 * A plugin exports a Library whose dialogs are the LUIS intents the plugin can understand
 */

// Create plugin, the id must be unique in your bot.
let plugin = new BotBuilder.Library('greeting');

/**
 * Add dialogs that this library can manage.
 */

// Value of "matches" attribute corresponds to the assigned name of this intent on LUIS.
plugin.dialog('greeting', greeting).triggerAction({
    matches: 'greeting'
});

plugin.dialog('goodbye', goodbye).triggerAction({
    matches: 'goodbye'
});

export default plugin;
