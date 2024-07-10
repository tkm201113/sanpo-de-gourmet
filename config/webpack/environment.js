const { environment } = require('@rails/webpacker');
const { DefinePlugin } = require('webpack');

environment.plugins.append('DefinePlugin', new DefinePlugin({
  'process.env.GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.GOOGLE_MAPS_API_KEY)
}));

module.exports = environment;