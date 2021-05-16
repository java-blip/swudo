import transpile from './transpile';
import readFile from './readFile';
import ts from 'typescript';

function compile(file) {
    const data = readFile(file);

    let jsCode = transpile(data, {
        compilerOptions: {
            module: ts.ModuleKind.ES2015
        }
    });

    jsCode = jsCode.replace(/export\D+/g, '');

    const compileContext = eval;

    return compileContext(jsCode);
}

export default compile;

compile(process.argv[2])