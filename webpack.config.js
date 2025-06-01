const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Входной файл
  entry: [
    './src/js/index.js'
  ],

  // Выходной файл
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

    mode: 'development',

  // Source maps для удобства отладки
  devtool: "source-map",

  watchOptions: {
    ignored: ['**/node_modules', 'C:\\DumpStack.log.tmp']
  },

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

          {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true, url: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [['autoprefixer', {}]],
              },
            },
          },
        ],
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [['autoprefixer', {}]],
                },
              },
            },
          {
            loader: 'sass-loader',
            options: { 
              sourceMap: true,
              sassOptions: {
              includePaths: [path.resolve(__dirname, 'src/scss/styles')],
              },
            },
          },
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
            name: './fonts/[name].[ext]',
            },
          },
        ]
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './static/[name].[ext]',
            },
          },
        ]
      },
    ],
  },

  plugins: [
    require('autoprefixer'), 
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: 'body',
      minify: false,
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    // Копируем картинки
new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, 'src/scss/img'),
    to: 'img',
  },
])
]}