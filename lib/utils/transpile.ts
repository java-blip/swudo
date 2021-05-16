import ts from 'typescript';

/**
 * 
 * @param {string} source Source code
 * @param {ts.TranspileOptions} transpilerOptions Typescript transpiler options
 * @returns {string} Transpiles Javascript Code
 */
function transpile(source: string, transpilerOptions?: ts.TranspileOptions) {
    const input = source;

    const result = ts.transpileModule(input, transpilerOptions || {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS
        }
    });

    if ('diagnostics' in result && result.diagnostics?.length !== 0) {
        result.diagnostics?.map(diagnostic => {
            throw new Error(String(diagnostic));
        });
    }

    return result.outputText;
}

export default transpile;
