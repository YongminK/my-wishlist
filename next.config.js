/** @type {import('next').NextConfig} */
const path = require('path')
const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  module:{
    rules:[
      {
        test:/\.(png|jpg|woff|svg|eot|ttf|woff2|otf)$/,
        loader:'url-loader?limit=8192&name=images/[name].[ext]'

      }
    ]
  }
})


