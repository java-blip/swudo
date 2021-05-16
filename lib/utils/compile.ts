import ts from 'typescript';
import fs from 'fs';
import cp from 'child_process';
import path from 'path';
import transpile from './transpile';
import readFile from './readFile';


/**
 * @param {string} file Path to the file
 * @param {string} buildFileName File Name of the build file
 * @returns {void} Compiles and runs the code
 */
function compile(file: string, buildFileName?: string): cp.ChildProcess {
    const data = readFile(file);

    let jsCode = transpile(data, {
        compilerOptions: {
            module: ts.ModuleKind.ES2015
        }
    });

    const pathToBuild = path.resolve(path.join(path.dirname(file), buildFileName || path.basename(file).replace(".ts", ".js")));

    fs.writeFileSync(pathToBuild, jsCode, {
        encoding: 'utf-8'
    });

    const compiler = cp.spawn(`node ${pathToBuild}`, {
        shell: true,
        stdio: 'inherit'
    });

    return compiler;
}

export default compile;