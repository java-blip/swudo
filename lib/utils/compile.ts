import ts from 'typescript';
import fs from 'fs';
import path from 'path';
import transpile from './transpile';
import readFile from './readFile';

/**
 * @param {string} file Path to the file
 * @param {boolean} shouldBuild whether to result output the file
 * @param {string} buildFileName File Name of the build file
 * @returns {void} Compiles and runs the code
 */
function compile(file: string, shouldBuild?: boolean, buildFileName?: string): void {
    const data = readFile(file);

    let jsCode = transpile(data, {
        compilerOptions: {
            module: ts.ModuleKind.ES2015
        }
    });

    if (shouldBuild) {
        const pathToBuild = path.join(path.dirname(file), buildFileName || path.basename(file).replace(".ts", ".js"));

        fs.writeFileSync(pathToBuild, jsCode, {
            encoding: 'utf-8'
        });
    }


    jsCode = jsCode.replace(/export\D+/g, '');

    const compileContext = eval;

    return compileContext(jsCode);
}

export default compile;