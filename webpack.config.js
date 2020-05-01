const path = require('path');

module.exports = {
    entry: './src/challenge.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
