# chatbots-workshop-hoc-2017
Repository for my chatbots development workshop at Hour of Code 2017.

## What we build here: Cryptonito
Our sample bot is called Cryptonito, and he's your best friend in the cryptocurrencies world.

## Development
### Getting started
#### Prerequisites
- [Node.js 8.x.x](https://nodejs.org/es/)
- [Bot Framework Emulator](https://github.com/Microsoft/BotFramework-Emulator)

#### Environment preparation
1. Register your bot in Bot Framework Portal and get your `MICROSOFT_APP_ID` and `MICROSOFT_APP_PASSWORD` variables: [tutorial](https://docs.microsoft.com/en-us/bot-framework/portal-register-bot).
2. Create your LUIS app, get your endpoint for NLP (`LUIS_MODEL_URL` env var) and configure intents: [tutorial](https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-get-started-create-app).
3. Copy the `.env.example` file and rename it to `.env`. Fill it with your env variables.
4. Set Bot Framework Emulator: [tutorial](https://docs.microsoft.com/en-us/bot-framework/debug-bots-emulator).

#### Install
```bash
yarn # Install dependencies.
```

#### Build and run
```bash
npm run dev # Run server.
```

## Overall architecture
```
                                         +--------+
                                         |  LUIS  <--- Training tools
                                         +---+----+
                                             |
                         +-------------------------+
                         | +---+ +---+       |     |    +----------+
                         | |   | |   |       |     | +-->  plugin  |
                         | | m | | m |   +---+---+ | |  +----------+
           +---------+   | | i | | i |   |       | | |  +----------+     +-----------------+
           |         |   | | d | | d |   |       | | +-->  plugin  |  +-->3rd party service|
Direct     |   MS    |   | | d | | d |   |       | | |  +----------+  |  +-----------------+
 Line  +---+ gateway +---+ | l | | l +--->  BOT  +---+  +----------+  |
           |         |   | | e | | e |   |       | | +-->  plugin  +--+
           |         |   | | w | | w |   |       | |    +----------+
           +---------+   | | a | | a |   |       | |
                         | | r | | r |   |       + |
                         | | e | | e |   +---+---+ |
                         | |   | |   |       |     |
                         | +---+ +---+       |     |
                         +-------------------------+
                                             |
                                             |
                                        +----+----+
                                        | context |
                                        +---------+
```
