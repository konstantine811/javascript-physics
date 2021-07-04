const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const folderBuild = 'build';

const PATHS = {
  pugPages: 'src/pug/pages/',
};

const PAGES_DIR = path.join(__dirname, PATHS.pugPages);
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith('.pug'));

const pug = {
  test: /\.pug$/,
  use: [
    'html-loader',
    {
      loader: 'pug-html-loader',
      options: {
        pretty: true,
      },
    },
  ],
};

const html = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
    },
  ],
};

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  devtool: mode === 'development' ? 'inline-source-map' : false,
  mode: mode,
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['ts-loader'],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'sass-loader',
        ],
      },
      pug,
    ],
  },
  resolve: {
    extensions: ['*', '.tsx', '.ts', '.js'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  devServer: {
    contentBase: path.join(__dirname, folderBuild),
    port: 3000,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    /* new HtmlWebpackPlugin({
      template: './src/index.html',
    }), */
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, '.html')}`,
        })
    ),
    new HtmlWebpackPugPlugin(),
    new MiniCssExtractPlugin({
      filename: mode ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: mode ? '[id].css' : '[id].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/'),
          to: 'images/',
          context: 'app/',
        },
      ],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, folderBuild),
    chunkFilename: '[name].js',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `chunk_${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
};
