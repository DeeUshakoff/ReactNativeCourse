const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    alias: {
      '@components': './app/components',
      '@homeworks': './app/views/homeworks',
      '@modules': './app/modules',
      '@hooks': './app/hooks',
      '@assets': './app/assets',
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
