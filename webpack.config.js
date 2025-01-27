const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Customize the config before returning it
  config.resolve.alias = {
    ...config.resolve.alias,
    'crypto': require.resolve('crypto-browserify'),
    'stream': require.resolve('stream-browserify'),
    'vm': require.resolve('vm-browserify')
  };

  config.resolve.fallback = {
    "crypto": require.resolve('crypto-browserify'),
    "stream": require.resolve('stream-browserify'),
    "vm": require.resolve('vm-browserify'),
    "assert": require.resolve('assert/'),
    "http": require.resolve('stream-http'),
    "https": require.resolve('https-browserify'),
    "os": require.resolve('os-browserify/browser'),
    "url": require.resolve('url/')
  };

  return config;
};
