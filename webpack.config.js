const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  if (config.mode === 'development') {
    config.devServer.hot = true;  // Enable HMR
  }
  return config;
};
