#!/usr/bin/env node

import { extract, transpile, readFile } from '../lib/index';

/**
 * @param {string} command Command to check
 * @returns {boolean} if it exits on the process running
 */
const existsCommand = (command: string): boolean => process.argv.includes(command);

if (existsCommand('--extract')) {
    process.argv.map((value, i) => {
        if (value === '--extract') {
            console.log(extract(readFile(process.argv[i + 1]), process.argv.slice(i + 2)));
            return extract(readFile(process.argv[i + 1]), process.argv.slice(i + 2));
        }
    });
}

if (existsCommand('--transpile')) {
    process.argv.map((value, i) => {
        if (value === '--transpile') {
            console.log(transpile(readFile(process.argv[i + 1]), {
                compilerOptions: {
                    declaration: true
                }
            }));

            return transpile(readFile(process.argv[i + 1]), {
                compilerOptions: {
                    declaration: true
                }
            });
        }
    });
}