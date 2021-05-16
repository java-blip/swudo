import transpile from './transpile';
import readFile from './readFile';
import vm from 'vm';
import ts from 'typescript';

function compile(file) {
    const data = readFile(file);

    const jsCode = transpile(data, {
        compilerOptions: {
            module: ts.ModuleKind.ES2015
        }
    });

    const compileContext = vm.runInThisContext(jsCode);

    return compileContext;
}

export default compile;

compile(process.argv[2])