module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@components': './app/components',
          '@homeworks': './app/views/homeworks',
        },
      },
    ],
  ],
};
