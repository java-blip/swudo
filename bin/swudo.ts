#!/usr/bin/env node

import ts from 'typescript';
import { extract, transpile, readFile, docs } from '../lib/index';

/**
 * [''], {} {string} command Command to check
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