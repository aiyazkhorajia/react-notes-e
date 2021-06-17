/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

var config = {
  entry: { 
      index: path.resolve(__dirname, "src", "index.js") 
  },
  output: {
      path: path.resolve(__dirname, "build")
  },
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpg|svg|gif|pdf)$/i,
          use: [
            {
              loader: "file-loader"
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: false
              }
            }
          ]
        }
      ]
  },
  resolve: {
    alias: {
      Pages: path.resolve(__dirname, 'src/pages/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Store: path.resolve(__dirname, 'src/store/'),
      Helpers: path.resolve(__dirname, 'src/helpers/'),
      Assets: path.resolve(__dirname, 'src/assets/')
    },
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      })
  ]
}

module.exports = (env, argv) => {
  let environment;
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    environment = ".env.development";
  } else if(argv.mode === 'production') {
    environment = ".env.production";
  } else {
    environment = ".env";
  }

  config.plugins.push( 
    new Dotenv({
      path: path.join(__dirname, environment)
    })
  );
  return config;
}