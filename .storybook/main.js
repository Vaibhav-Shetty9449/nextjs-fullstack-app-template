module.exports = {
    stories: [
      '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
      '../components/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
      '@storybook/addon-essentials',
      '@storybook/addon-links',
      '@storybook/addon-interactions',
      '@storybook/addon-styling-webpack',
      '@storybook/addon-docs',
    ],
    framework: {
      name: '@storybook/nextjs',
      options: {
        builder: {
          useSWC: true,
        },
      },
    },
    features: {
      storyStoreV7: true,
    },
    staticDirs: ['../public'],
    webpackFinal: async (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        'next/router': require.resolve('./next-router-mock.js'),
      };
      return config;
    },
  };