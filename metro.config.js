const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const customConfig = {
  // Tambahkan konfigurasi kustom di sini jika diperlukan
};

module.exports = mergeConfig(getDefaultConfig(__dirname), customConfig);
