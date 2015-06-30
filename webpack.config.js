module.exports = {
  entry: './client/js/main.js',
  output: {
    filename: 'public/javascripts/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
