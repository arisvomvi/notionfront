import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  // viteFinal: async (config) => {
  //   // Define your aliases here
  //   config.resolve.alias = [
  //     {
  //       find: '@styles',
  //       replacement: '/src/styles', // Adjust this path
  //     },
  //     ...config.resolve.alias,
  //   ];
  //   return config;
  // },
  // viteFinal: async (config) => {
  //   // Extend Vite's configuration to inject global SCSS
  //   return mergeConfig(config, {
  //     css: {
  //       preprocessorOptions: {
  //         scss: {
  //           additionalData: `
  //           @import "@styles/app.scss";
              
  //           `,
  //         },
  //       },
  //     },
  //   });
  // },
};
export default config;
