import { createApp } from 'vue';
//import App from '@/App.vue';

// import GlobalComponents from './plugins/global-components.js';
import Button from './components/base/button/Button.vue';
import FormControl from './components/base/form-control/FormControl.vue';
// const app = createApp(App);

// app.use(GlobalComponents);

// app.mount('#duper');

// const requireComponent = import.meta.glob('@components/base/**/*.vue', { eager: true });

// export default {
//   install(app) {
//     // Register each component globally
// for (const path in requireComponent) {
//   const component = requireComponent[path].default;
//   app.component(`Gng${component.name}`, component);
// }
//   },
// };

import Exp626 from './Exp626.vue';

// const requireComponent = import.meta.glob('@components/base/**/*.vue', { eager: true });

export function registerCustomComponent() {
  customElements.define(
    'exp-626',
    class extends HTMLElement {
      connectedCallback() {
        const app = createApp(Exp626, {
          type: this.getAttribute('type') || 'sliders',
        });

        //  // Register additional components
        //  for (const path in requireComponent) {
        //   const component = requireComponent[path].default;
        //   app.component(`Gng${component.name}`, component);
        // }

        app.component('gng-form-control', FormControl);
        const mountPoint = document.createElement('div');
        this.appendChild(mountPoint);
        app.mount(mountPoint);
      }
    }
  );
}
