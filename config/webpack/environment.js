const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.append('DefinePlugin', new webpack.DefinePlugin({
  'process.env.GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.GOOGLE_MAPS_API_KEY)
}))

module.exports = environment