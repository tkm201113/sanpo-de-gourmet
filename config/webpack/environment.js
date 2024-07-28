const { environment } = require('@rails/webpacker');
const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

const babelLoader = require('./loaders/babel');

environment.loaders.prepend('babel', babelLoader);

environment.plugins.append('DefinePlugin', new DefinePlugin({
  'process.env.GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.GOOGLE_MAPS_API_KEY)
}));

module.exports = environment;