import os from 'os';

function isWindows() {
    return os.arch() === 'win32' ? true : false;
}

export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "google"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "linebreak-style": ["error", isWindows() ? 'windows' : 'unix']
    }
}
