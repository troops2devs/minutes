module.exports = {
  entry: './client/js/main.js',
  output: {
    filename: 'public/javascripts/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.hbs$/, loader: 'handlebars-loader' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
