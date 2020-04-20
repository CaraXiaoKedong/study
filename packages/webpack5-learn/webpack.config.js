const path = require('path');
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/build'),
    libraryTarget: 'module',
    library: '222',
    filename: 'bundle.js'
  },
  experiments: {
    outputModule: true
  }
}