// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = ({env}) => ({
  plugins: [
    // to edit target browsers: use "browserslist" field in package.json
    env === 'production' ? require('autoprefixer') : false
  ]
})
