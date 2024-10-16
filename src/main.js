import { createApp } from 'vue';
//import App from '@/App.vue';

// import GlobalComponents from './plugins/global-components.js';
import Button from './components/base/button/Button.vue';
import FormControl from './components/base/form-control/FormControl.vue';
// const app = createApp(App);

// app.use(GlobalComponents);

const requireComponent = import.meta.glob('@components/base/**/*.vue', { eager: true });

import Exp626 from './Exp626.vue';

import { createApp } from 'vue';

// Function to register custom components
export function registerCustomComponent() {
  customElements.define(
    'exp-626',
    class extends HTMLElement {
      connectedCallback() {
        // Create a shadow root to encapsulate styles
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a mount point for the Vue app
        const mountPoint = document.createElement('div');
        shadow.appendChild(mountPoint);

        // Load styles from each component and append to shadow DOM
        const style = document.createElement('style');

        // Load all SCSS or CSS styles dynamically
        Object.keys(requireComponent).forEach(path => {
          const component = requireComponent[path].default;
          // Add component styles to the shadow DOM
          const stylePath = path.replace('.vue', '.scss');
          style.textContent += `
            @import '${stylePath}';
          `;
          // Register the component
          const componentName = `Gng${component.name}`;
          const app = createApp(component);
          app.component(componentName, component);
          app.mount(mountPoint); // Mount the app to the shadow root
        });

        shadow.appendChild(style); // Append styles to the shadow DOM
      }
    }
  );
}

// Call the function to register your custom component
// registerCustomComponent();

// const requireComponent = import.meta.glob('@components/base/**/*.vue', { eager: true });

// export function registerCustomComponent() {
//   customElements.define(
//     'exp-626',
//     class extends HTMLElement {
//       connectedCallback() {
//         const app = createApp(Exp626, {
//           type: this.getAttribute('type') || 'sliders',
//         });

//         // const app = createApp(Exp626);

//         //  // Register additional components
//         //  for (const path in requireComponent) {
//         //   const component = requireComponent[path].default;
//         //   app.component(`Gng${component.name}`, component);
//         // }

//         app.component('gng-button', Button);
//         const mountPoint = document.createElement('div');
//         this.appendChild(mountPoint);
//         app.mount(mountPoint);
//       }
//     }
//   );

//   customElements.define(
//     'exp-626',
//     class extends HTMLElement {
//       connectedCallback() {
//         const app = createApp(Exp626, {
//           type: this.getAttribute('type') || 'sliders',
//         });

//         // const app = createApp(Exp626);

//         //  // Register additional components
//         //  for (const path in requireComponent) {
//         //   const component = requireComponent[path].default;
//         //   app.component(`Gng${component.name}`, component);
//         // }

//         app.component('gng-button', Button);
//         const mountPoint = document.createElement('div');
//         this.appendChild(mountPoint);
//         app.mount(mountPoint);
//       }
//     }
//   );
//   customElements.define(
//     'gng-button',
//     class extends HTMLElement {
//       connectedCallback() {
//         const app = createApp(Button, {
//           text: this.getAttribute('text') || 'Add name here',
//         });

//         // const app = createApp(Exp626);

//         //  // Register additional components
//         //  for (const path in requireComponent) {
//         //   const component = requireComponent[path].default;
//         //   app.component(`Gng${component.name}`, component);
//         // }

//         const mountPoint = document.createElement('div');
//         this.appendChild(mountPoint);
//         app.mount(mountPoint);
//       }
//     }
//   );
// }
