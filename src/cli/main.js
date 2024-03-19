#!/usr/bin/env node
import os from 'os';
/** Welcome. */
import printWelcome from './ascii_art/welcome.js';
printWelcome();
console.log(`Host_Session@ ${os.userInfo().username}`);
console.log(`v.path@ ${os.homedir()}/.me`);
/**
 * @module CLI
 * @description
 *  - Command Line Interface.
 *  The CLI application's code structure is categorized into two main parts:
 *  Command Definitions and Interactive Shell.*/
