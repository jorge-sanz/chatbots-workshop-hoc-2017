import * as BotBuilder from 'botbuilder';

// Each function corresponds to a dialog interaction.
export default [
    goodbye
];

function goodbye(session: BotBuilder.Session, args: any, next: Function) {
    session.endDialog(session.gettext('Bye'));
}
