module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver",
      {
        root: ["./src"],
        alias: {
          '@assets': "./src/assets",
          '@components': "./src/components",
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@utils': './src/utils',
          "@routes": './src/routes',
          "@theme": './src/theme',
          "@services": './src/services',
          "@store": './src/store'
        },
      }]
    ]
  };
};
