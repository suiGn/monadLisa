#!/usr/bin/env node
import 'dotenv/config';
import os from 'os';
import readline from 'readline';
import OpenAI from 'monads.openai';
//import vpath from 'v.path';
import repl from 'repl';
//import ThisMe from './this.me';
//import Cleaker from 'cleaker';
/** Welcome. */
console.log(`Session@ ${os.userInfo().username}`);
// Initialize readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Initialize Monad with your OpenAI API key
const monad = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
// Initialize ThisMe and Cleaker
//const thisMeInstance = new ThisMe();
//const cleakerInstance = new Cleaker();
// Command definitions
const commands = {
  greet: () => {
    console.log('Hello! This is .Lisa, your digital assistant.');
  },
  exit: () => {
    console.log('Goodbye!');
    rl.close();
  },
  query: async (prompt) => {
    try {
      console.log(`Preparing to query OpenAI with: ${prompt}`);
      const response = await monad.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 150
      });
      console.log(`Query response: ${response.choices[0].text}`);
    } catch (error) {
      console.error("Query failed:", error);
    }
  },
  chat: async (message) => {
    try {
      const messages = [{ role: "user", content: message }];
      const response = await monad.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages
      });
      console.log(`Chat completion response: ${response.choices[0].message.content}`);
    } catch (error) {
      console.error("Chat completion failed:", error);
    }
  }
};

// Interactive shell
rl.setPrompt('lisa> ');
rl.prompt();

rl.on('line', async (input) => {
  const [command, ...args] = input.trim().split(' ');
  if (commands[command]) {
    await commands[command](args.join(' '));
  } else {
    console.log(`Unknown command: ${command}`);
  }
  rl.prompt();
}).on('close', () => {
  console.log('Session ended.');
  process.exit(0);
});

// Start the custom REPL
const myRepl = repl.start({ prompt: 'runTime::: ' });

// Expose your instances to the REPL context
//myRepl.context.thisMe = thisMeInstance;
//myRepl.context.cleaker = cleakerInstance;
console.log('Interactive Node Runtime started. Use //`thisMe` and //`cleaker` directly.');
// Initialize other functionalities
// NETGET
//const netget = new NetGet();
//netget.Gateway({ routes: routes }).listen();
// V.PATH
//const localDbPool = vpath.createPool(
// process.env.LOCAL_DB_HOST,
// parseInt(process.env.LOCAL_DB_PORT, 10),
// process.env.LOCAL_DB_USER,
// process.env.LOCAL_DB_PASSWORD,
// process.env.DB_NAME
//  );
//const vault = new vpath.TheVault();
//console.log(vault);
console.log("index.js endLine 1");
