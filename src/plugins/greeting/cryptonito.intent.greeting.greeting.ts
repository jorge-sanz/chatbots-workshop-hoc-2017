import * as BotBuilder from 'botbuilder';

// Each function corresponds to a dialog interaction.
export default [
    helloWorld
];

function helloWorld(session: BotBuilder.Session, args: any, next: Function) {
    session.endDialog('Hello');
}
