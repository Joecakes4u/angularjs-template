var path = require('path');

module.exports = {
    entry: './src/app.module.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      }
  };
