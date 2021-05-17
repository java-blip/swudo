const os = require('os');

/**
 * @return {boolean} Whether it is a windows system or not
 */
function isWindows() {
    return os.arch() === 'win32' ? true : false;
}

module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'google',
        'prettier'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        'linebreak-style': 0
    }
}
