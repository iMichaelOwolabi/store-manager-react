const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv');
const webpack = require('webpack');
dotenv.config();

module.exports = merge(common, {
   mode: 'production'
});