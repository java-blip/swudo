import fs from 'fs';

/**
 * 
 * @param {string} file Path to the file
 * @returns {void} Replace the imports with .js ext
 */
function fixPaths(file) {
    let targetFile = fs.readFileSync(file, 'utf-8');
    const myRegex = /import(?:[''\s]*([\w*{}\n\r\t, ]+)from\s*)?[''\s].*([@\w/_-]+)[''\s].*/gi;

    const imports = targetFile.match(myRegex);

    imports.map(imp => {
        imp = imp.substr(imp.indexOf('\'' || '\''), imp.lastIndexOf('\'') || imp.lastIndexOf('\''));

        // removing quotes
        imp = imp.replace(/(')|(')/gi, '');
        // removing semi colons
        imp = imp.replace(';', '');

        let tempImp = imp;

        if (!tempImp.endsWith('.js') && tempImp.startsWith('.')) {
            targetFile = targetFile.replace(tempImp, imp.concat('.js'));
        }
    });

    fs.writeFileSync(file, targetFile, {
        encoding: 'utf-8'
    });

    return 'Fixed All Paths!';
}

setTimeout(() => {
    console.log(fixPaths(`${process.cwd()}/dist/bin/swudo.js`));
    console.log(fixPaths(`${process.cwd()}/dist/lib/index.js`));
    console.log(fixPaths(`${process.cwd()}/dist/lib/docs/generateDocumentation.js`));
    console.log(fixPaths(`${process.cwd()}/dist/lib/utils/extract.js`));
    console.log(fixPaths(`${process.cwd()}/dist/lib/utils/readFile.js`));
    console.log(fixPaths(`${process.cwd()}/dist/lib/utils/transpile.js`));
    console.log(fixPaths(`${process.cwd()}/dist/lib/utils/compile.js`));
}, 2000);
