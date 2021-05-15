import fs from 'fs';
import path from 'path';

const _path = path;

function readFile(path: string) {
    const data = fs.readFileSync(_path.resolve(path), {
        encoding: 'utf-8'
    });

    return data;
}

export default readFile;