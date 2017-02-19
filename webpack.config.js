module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname,
    filename: "app.js"
  },
  module: {
    rules: [
      { test: /\.sass$/,
        use: [{ loader: "style-loader" },
              { loader: "css-loader" },
              { loader: "sass-loader" }] },
      {  test: /\.png$/,
         loader: 'file-loader' },
    ]
  }
};
