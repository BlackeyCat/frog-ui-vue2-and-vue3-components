import { addComponent } from './commands/add.js';

import pkg from 'commander';
const { Command } = pkg;

const program = new Command();

program
    .command('add')
    .action(() => {
        // eslint-disable-next-line no-console
        console.log('recognised log');
    })
    .action(addComponent);

program.on('command:*', () => {
    console.error(`Invalid action: ${program.args.join()}`);
});

program.parse(process.argv);
