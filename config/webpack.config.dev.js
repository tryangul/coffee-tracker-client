var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var paths = require('./paths');

module.exports = {
  devtool: 'eval',
  entry: [
    require.resolve('webpack-dev-server/client'),
    require.resolve('webpack/hot/dev-server'),
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index')
  ],
  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: paths.appBuild,
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  resolveLoader: {
    root: paths.ownNodeModules,
    moduleTemplates: ['*-loader']
  },
  module: {
    preLoaders: [
      {
        test: [/\.js$/, /\.jsx?$/],
        loader: 'eslint',
        include: paths.appSrc,
      }
    ],
    loaders: [
      {
        test: [/\.js$/, /\.jsx?$/],
        include: paths.appSrc,
        loader: 'babel',
        query: require('./babel.dev')
      },
      {
        test: [/\.scss$/, /\.css$/],
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'style!css!sass!postcss'
      },
      {
        test: /\.json$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'file',
      },
      {
        test: /\.(mp4|webm)$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'url?limit=10000'
      }
    ]
  },
  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    // Note: only CSS is currently hot reloaded
    new webpack.HotModuleReplacementPlugin()
  ]
};
