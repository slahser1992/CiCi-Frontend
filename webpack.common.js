'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  resolve: {
    extensions: [
      ".js", ".yml"
    ],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      store: path.resolve(__dirname, "src/store"),
      styles: path.resolve(__dirname, "styles"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "CiCi",
      template: './src/index.hbs',
      chunks: ['app'],
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: "/",
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
        options: {
          presets: ["es2015", "stage-0", "react"],
          plugins: ["transform-decorators-legacy", "transform-runtime"],
        }
      }]
    }, {
      test: /\.yml$/,
      exclude: /node_modules/,
      use: [{
        loader: "json-loader",
      }, {
        loader: "yaml-loader",
      }],
    }]
  }
};
