var path = require('path');

module.exports = {
    entry: [
        './src/app.bootstrap.js',
        './src/app.config.js',
        './src/app.controller.js',
        './src/features/binding-example/binding-example.controller.js',
        './src/features/home/home.controller.js',
        './src/features/login/login.controller.js',
        './src/features/profile/profile.controller.js',
        './src/services/rest.service.js'
    ],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      }
  };
