const { type } = require('os');
const path = require('path');

module.exports = {
  mode: 'production', 
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'quill-syntax-code-block-container.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'QuillSyntaxCodeBlockContainer',
      type: 'umd'
    },
    libraryTarget: 'window',
    globalObject: 'this',
  },
  externals: {
    quill: 'Quill',
  },
};
