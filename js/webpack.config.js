const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'componentes_compilados.js',
        path: path.resolve(__dirname, 'dist'),
    },
};