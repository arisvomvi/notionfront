import type { Preview } from "@storybook/vue3";
// Import your global component registration
// import GlobalComponents from '../src/global-components.js'; // Adjust the path as needed

// import { app } from '@storybook/vue3';
const requireComponent = import.meta.glob('@components/base/**/*.vue', { eager: true });

import { setup } from '@storybook/vue3'

setup((app) => {
  for (const path in requireComponent) {
    const component = requireComponent[path].default;
    app.component(`Gng${component.name}`, component);
  }
})


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  
};

export default preview;


// import type { Preview } from "@storybook/vue3";
// // Automatically import all components from the 'components/base' directory
// const requireComponent = import.meta.glob('@components/base/**/*.vue', { eager: true });

// // This function will be called to setup the global components in Storybook
// export const setup = (app) => {
//   for (const path in requireComponent) {
//     const component = requireComponent[path].default;
//     app.component(`Gng${component.name}`, component); // Register the component globally with a prefix
//   }
// };

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
