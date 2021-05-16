#!/usr/bin/env node

import { extract, transpile, readFile, compile, docs } from '../lib/index';

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

if (existsCommand('--docs')) {
    process.argv.forEach((arg, i) => {
        if (arg === '--docs') {
            return docs([process.argv[i + 1]], {})
        }
    });
};

if (!process.argv[2].startsWith("--")) {
    const shouldBuild = process.argv[3] ? (process.argv[3] === '--out' ? true : false) : false;

    compile(process.argv[2], shouldBuild ? process.argv[4] : undefined);
}