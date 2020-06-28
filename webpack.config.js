const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
         use: [{ loader: "ts-loader" }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".ts", ".tsx", ".js"] }
}